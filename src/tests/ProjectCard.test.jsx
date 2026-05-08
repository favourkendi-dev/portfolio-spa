import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';
import { BrowserRouter } from 'react-router-dom';

const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description',
  imageUrl: 'https://images.unsplash.com/photo-1',
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
      name: /bookmark test project/i,
    });

    expect(bookmarkButton).toBeInTheDocument();
    expect(bookmarkButton).toHaveTextContent('Bookmark');
  });

  test('shows bookmarked state correctly', () => {
    renderComponent({ isBookmarked: true });

    const bookmarkButton = screen.getByRole('button', {
      name: /remove test project from bookmarks/i,
    });

    expect(bookmarkButton).toHaveTextContent('Bookmarked');
  });

  test('calls onBookmark when bookmark button is clicked', () => {
    const onBookmarkMock = jest.fn();

    renderComponent({ onBookmark: onBookmarkMock });

    const bookmarkButton = screen.getByRole('button', {
      name: /bookmark test project/i,
    });

    fireEvent.click(bookmarkButton);

    expect(onBookmarkMock).toHaveBeenCalledTimes(1);
    expect(onBookmarkMock).toHaveBeenCalledWith('1');
  });

  test('calls onDelete when delete button is clicked', () => {
    const onDeleteMock = jest.fn();

    renderComponent({ onDelete: onDeleteMock });

    const deleteButton = screen.getByRole('button', {
      name: /delete test project/i,
    });

    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledWith('1');
  });

  test('does not render delete button when not owner', () => {
    renderComponent({ isOwner: false });

    const deleteButton = screen.queryByRole('button', {
      name: /delete test project/i,
    });

    expect(deleteButton).not.toBeInTheDocument();
  });

  test('has accessible image alt text', () => {
    renderComponent();

    const image = screen.getByAltText('Test Project');

    expect(image).toBeInTheDocument();
  });
});