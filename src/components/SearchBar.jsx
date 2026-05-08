import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

export function useSearchFilter(data = [], searchFields = []) {
  const [query, setQuery] = useState('');

  const normalizedQuery = useMemo(
    () => query.trim().toLowerCase(),
    [query]
  );

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    if (!normalizedQuery) return data;

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item?.[field];
        return (
          typeof value === 'string' &&
          value.toLowerCase().includes(normalizedQuery)
        );
      })
    );
  }, [data, normalizedQuery, searchFields]);

  const resetSearch = () => {
    setQuery('');
  };

  return {
    query,
    setQuery,
    filteredData,
    resetSearch,
  };
}

function SearchBar({ query, setQuery, onSearch, placeholder = 'Search by title or description' }) {
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  return (
    <div className="mb-8">
      <label htmlFor="project-search" className="mb-2 block text-sm font-medium">
        Search Projects
      </label>

      <input
        id="project-search"
        type="search"
        role="searchbox"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-md border px-4 py-3"
        aria-label="Search projects"
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBar;
