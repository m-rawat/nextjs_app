"use client";

import styles from "../styles/SearchBox.module.css";

const SearchBox = ({ searchText, setSearchText }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        placeholder="Search by tag"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
