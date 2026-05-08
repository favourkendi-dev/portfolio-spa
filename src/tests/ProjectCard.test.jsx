import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';
import { BrowserRouter } from 'react-router-dom';

const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description',
  imageUrl: 'https://images.unsplash.com/photo-1',
  createdAt: new Date('2024-01-01'),
  userId: 'testuser',
  category: 'Web Development',
};

const renderComponent = (props = {}) => {
  const defaultProps = {
    project: mockProject,
    onBookmark: jest.fn(),
    onDelete: jest.fn(),
    isBookmarked: false,
    isOwner: true,
  };

  return render(
    <BrowserRouter>
      <ProjectCard {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe('ProjectCard', () => {
  test('renders project data correctly', () => {
    renderComponent();

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test project description')
    ).toBeInTheDocument();
    expect(screen.getByAltText('Test Project')).toBeInTheDocument();
  });

  test('renders bookmark button in default state', () => {
    renderComponent();

    const bookmarkButton = screen.getByRole('button', {
      name: /Add to bookmarks/i,
    });

    expect(bookmarkButton).toBeInTheDocument();
    expect(bookmarkButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('shows bookmarked state correctly', () => {
    renderComponent({ isBookmarked: true });

    const bookmarkButton = screen.getByRole('button', {
      name: /Remove from bookmarks/i,
    });

    expect(bookmarkButton).toBeInTheDocument();
    expect(bookmarkButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('calls onBookmark when bookmark button is clicked', () => {
    const onBookmarkMock = jest.fn();

    renderComponent({ onBookmark: onBookmarkMock });

    const bookmarkButton = screen.getByRole('button', {
      name: /Add to bookmarks/i,
    });

    fireEvent.click(bookmarkButton);

    expect(onBookmarkMock).toHaveBeenCalledTimes(1);
    expect(onBookmarkMock).toHaveBeenCalledWith('1');
  });

  test('calls onDelete when delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    window.confirm = jest.fn(() => true); // Mock confirm to return true

    renderComponent({ onDelete: onDeleteMock });

    const deleteButton = screen.getByRole('button', {
      name: /Delete Test Project/i,
    });

    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledWith('1');
  });

  test('does not render delete button when not owner', () => {
    renderComponent({ isOwner: false });

    const deleteButton = screen.queryByRole('button', {
      name: /Delete Test Project/i,
    });

    expect(deleteButton).not.toBeInTheDocument();
  });

  test('has accessible image alt text', () => {
    renderComponent();

    const image = screen.getByAltText('Test Project');

    expect(image).toBeInTheDocument();
  });
});