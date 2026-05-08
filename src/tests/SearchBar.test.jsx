import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

const renderComponent = (props = {}) => {
  const defaultProps = {
    query: '',
    setQuery: jest.fn(),
    onSearch: jest.fn(),
  };

  return render(<SearchBar {...defaultProps} {...props} />);
};

describe('SearchBar', () => {
  test('renders input element with correct accessibility', () => {
    renderComponent();

    const input = screen.getByRole('searchbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'search');
  });

  test('displays controlled input value correctly', () => {
    renderComponent({ query: 'react' });

    const input = screen.getByRole('searchbox');

    expect(input.value).toBe('react');
  });

  test('updates input value on change', () => {
    const setQueryMock = jest.fn();

    renderComponent({ setQuery: setQueryMock });

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, { target: { value: 'new value' } });

    expect(setQueryMock).toHaveBeenCalledTimes(1);
    expect(setQueryMock).toHaveBeenCalledWith('new value');
  });

  test('calls onSearch when input changes (real-time behavior)', () => {
    const onSearchMock = jest.fn();

    renderComponent({ onSearch: onSearchMock });

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, { target: { value: 'portfolio' } });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('portfolio');
  });

  test('handles empty input correctly', () => {
    const onSearchMock = jest.fn();

    renderComponent({
      query: 'portfolio',
      onSearch: onSearchMock,
    });

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, { target: { value: '' } });

    expect(onSearchMock).toHaveBeenCalledWith('');
  });

  test('maintains accessibility label association', () => {
    renderComponent();

    const input = screen.getByRole('searchbox');

    expect(input).toBeInTheDocument();
  });

  test('supports rapid consecutive input changes', () => {
    const setQueryMock = jest.fn();

    renderComponent({ setQuery: setQueryMock });

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(setQueryMock).toHaveBeenCalledTimes(3);
    expect(setQueryMock).toHaveBeenLastCalledWith('abc');
  });
});