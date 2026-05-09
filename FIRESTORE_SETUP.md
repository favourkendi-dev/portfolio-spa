# Firestore Security Rules Setup Guide

## Overview

This guide explains the production-safe Firestore security rules configured for this portfolio SPA. The rules protect against unauthorized access while allowing authenticated users to create and manage projects.

## Critical Issues Fixed

### ✅ "Missing or insufficient permissions" Error
**Root Cause**: The previous rules had syntax errors that prevented proper authentication checks:
- Used `resource.data` during CREATE operations (invalid - `resource` doesn't exist during create)
- Used `request.auth.uid == resource.data.userId` for bookmarks (invalid - bookmarks don't have this structure)

**Solution**: Corrected to use `request.resource.data` for write validation and proper auth context.

## Security Rules Structure

### 1. Projects Collection
```
/projects/{projectId}
├── READ: Anyone (public showcase)
├── CREATE: Authenticated users only
│   ├── Must provide all required fields (title, description, image, userId, createdAt)
│   ├── Must match authenticated user ID
│   ├── Field types and lengths validated
│   └── URL field optional
├── UPDATE: Project owner only
│   ├── userId and createdAt immutable
│   └── Other fields validated
└── DELETE: Project owner only
```

### 2. Bookmarks Collection
```
/bookmarks/{bookmarkId}
├── READ: User's own bookmarks only
└── WRITE: User's own bookmarks only
   ├── Must include userId field matching authenticated user
   └── Must include savedAt field
```

### 3. Users Collection
```
/users/{userId}
├── READ: User's own profile only
├── WRITE: User's own profile only
└── DELETE: User's own profile only
```

## Deployment Instructions

### Step 1: Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your portfolio project
3. Navigate to **Firestore Database**
4. Click **Rules** tab

### Step 2: Deploy Rules
1. Copy the contents of `firestore.rules`
2. Paste into the Firebase Console rules editor
3. Click **Publish**

### Step 3: Verify Deployment
```bash
# Test that project creation works
npm run dev
# Navigate to Create Project page and attempt to create a project
```

## Key Security Features

### ✅ Authentication Required for Writes
- Only authenticated users can create projects
- Only authenticated users can modify bookmarks

### ✅ Immutable Creator Info
- `userId` and `createdAt` cannot be changed after creation
- Prevents user tampering with project history

### ✅ Field Validation
- Title: Required, 1-200 characters
- Description: Required, 1-2000 characters
- Image: Required, must be valid path
- URL: Optional, no length validation needed
- CreatedAt: Required, ISO string format

### ✅ Public Read Access
- Anyone can view projects (unauthenticated users)
- Supports portfolio showcase use case

### ✅ Catch-All Deny Rule
- Any collection not explicitly allowed is denied
- Prevents unexpected access to hidden collections

## Troubleshooting

### Issue: Still Getting Permission Denied

**Check 1: Is user authenticated?**
```javascript
// Verify in browser console
firebase.auth().currentUser  // Should return user object, not null
```

**Check 2: Does Firestore data match schema?**
```javascript
// Required fields for projects:
{
  title: "string",
  description: "string", 
  image: "/uploads/filename.jpg",
  userId: "auth.uid",
  createdAt: "2024-01-15T10:30:00.000Z",
  url: "https://example.com" // optional
}
```

**Check 3: Have rules been published?**
- Go to Firebase Console > Firestore > Rules
- Click **Publish** if pending changes exist

**Check 4: Is collection name correct?**
- Verify your app writes to `/projects/` collection
- Not `/project/` (singular) or other variations

### Issue: Users Can't Delete Their Own Projects
**Cause**: Rule syntax error in delete clause
**Solution**: Ensure `resource.data.userId` is compared to `request.auth.uid`

### Issue: Bookmarks Creating with Wrong Structure
**Cause**: App not including `userId` field in bookmark document
**Solution**: Ensure bookmark write includes:
```javascript
{
  projectId: "project-id",
  userId: currentUser.uid,
  savedAt: new Date().toISOString()
}
```

## Testing Rules

### Using Firebase Emulator Suite (Recommended for Development)

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Initialize emulator
firebase init emulator

# Start emulator
firebase emulators:start

# In your app code, connect to emulator:
import { connectFirestoreEmulator } from "firebase/firestore";
if (location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
```

### Manual Testing Checklist

- [ ] Unauthenticated user can view projects
- [ ] Unauthenticated user cannot create projects
- [ ] Authenticated user can create projects
- [ ] User can only see their own bookmarks
- [ ] User cannot delete another user's project
- [ ] Project title/description validation works
- [ ] Image path starts with `/uploads/`

## Production Best Practices

1. **Monitor Firestore Usage**
   - Go to Firestore Console > Usage tab
   - Watch for unusual spike in permission-denied errors

2. **Log Denied Requests** (Advanced)
   - Enable Firestore audit logs in GCP
   - Review denied requests in Cloud Logging

3. **Regular Security Audits**
   - Review rules quarterly
   - Test with actual users before major changes
   - Keep backups of working rules

4. **Rate Limiting** (Future Enhancement)
   - Consider adding rate limiting for create operations
   - Monitor for spam/abuse patterns

## Related Files

- `src/services/projectService.js` - CRUD operations
- `src/services/firebase.js` - Firebase config
- `src/context/AuthContext.jsx` - Authentication state

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review [Firebase Firestore Rules Documentation](https://firebase.google.com/docs/firestore/security/get-started)
3. Test with Firebase Emulator Suite for local development
