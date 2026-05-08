import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

function FileUpload({ file, onFileChange, onValidationError, error, disabled }) {
  const [dragActive, setDragActive] = useState(false);

  const acceptedTypes = useMemo(() => ALLOWED_FILE_TYPES.join(','), []);

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
      return 'Image size must be 10MB or smaller.';
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

        <div className="pointer-events-none">
          {file ? (
            <div className="space-y-2 text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Selected file
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300">{file.name}</p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {`${(file.size / 1024 / 1024).toFixed(2)} MB`}
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Drag & drop an image here or click to select a file
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                JPG, PNG, and WEBP only. Maximum size 10MB.
              </p>
            </>
          )}
        </div>
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

FileUpload.defaultProps = {
  file: null,
  error: '',
  disabled: false,
};

export default FileUpload;
