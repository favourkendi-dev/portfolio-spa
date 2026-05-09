import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB strict limit

function FileUpload({ file = null, onFileChange, onValidationError, error = '', disabled = false }) {
  const [dragActive, setDragActive] = useState(false);

  const acceptedTypes = useMemo(() => ALLOWED_FILE_TYPES.join(','), []);
  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : ''), [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const validateFile = (selectedFile) => {
    if (!selectedFile) {
      return 'No file selected.';
    }

    if (!(selectedFile instanceof File)) {
      return 'Invalid file selected.';
    }

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      return 'Only JPG, PNG, and WEBP images are supported.';
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      return 'Image size must be 5MB or smaller.';
    }

    return '';
  };

  const handleFile = (selectedFile) => {
    const validationMessage = validateFile(selectedFile);

    if (validationMessage) {
      onFileChange(null);
      onValidationError(validationMessage);
      return;
    }

    onValidationError('');
    onFileChange(selectedFile);
  };

  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    handleFile(selectedFile);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const selectedFile = event.dataTransfer.files?.[0] || null;
    handleFile(selectedFile);
  };

  return (
    <div className="space-y-2">
      <label className="mb-2 block font-medium text-gray-900 dark:text-white">
        Project Image
      </label>
      <div
        className={`relative rounded-2xl border-2 px-4 py-10 text-center transition-all duration-200 focus-within:border-indigo-500 dark:focus-within:border-indigo-400 ${
          dragActive
            ? 'border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-slate-700'
            : 'border-dashed border-gray-300 bg-white dark:border-slate-600 dark:bg-slate-800'
        } ${disabled ? 'opacity-70' : 'hover:border-indigo-400 dark:hover:border-indigo-400'} `}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          id="project-image"
          name="project-image"
          type="file"
          accept={acceptedTypes}
          onChange={handleInputChange}
          disabled={disabled}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          aria-describedby={error ? 'project-image-error' : undefined}
        />

        {file ? (
          <div className="space-y-4 text-left">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-900">
              <img
                src={previewUrl}
                alt={file.name}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {file.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-slate-300">
                  {`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onFileChange(null);
                  }}
                  title="Remove image"
                  aria-label="Remove image"
                  className="inline-flex items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 transition-colors duration-200 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                >
                  <IoClose className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Drag & drop an image here or click to select a file
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              JPG, PNG, and WEBP only. Maximum size 5MB.
            </p>
          </>
        )}
      </div>

      {error && (
        <p id="project-image-error" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

FileUpload.propTypes = {
  file: PropTypes.instanceOf(File),
  onFileChange: PropTypes.func.isRequired,
  onValidationError: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FileUpload;
