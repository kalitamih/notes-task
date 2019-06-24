import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { search, handleSearch } = props;
  return (
    <form>
      <div className="form-group search">
        <input
          type="search"
          className="form-control"
          value={search}
          placeholder="Enter filter for notes"
          onChange={handleSearch}
        />
      </div>
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
