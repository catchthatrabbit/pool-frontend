import React, { FC } from 'react';
import styled from 'styled-components';

import { SearchIcon } from '../icons';

const SearchBarStyle = styled.div`
  display: flex;
  width: 83%;
  border-radius: 10px;
  margin: 85px auto;
   input {
    box-sizing: border-box;
    height: 55px;
    width: calc(100% - 68px);
    padding: 18px 20px;
    font-family: var(--secondary-font-family);
    font-size: 16px;
    border-radius: 10px 0 0 10px;
    border: 1px solid var(--gun-powder);
    color: var(--kimberly);
    background-color: rgba($color: var(--gun-powder), $alpha: 0.35);
    transition: 0.1s ease-in-out;
    &::placeholder {
      color: var(--kimberly);
    }
    &:focus,
    &:hover {
      outline: none;
      color: var(--white);
    }
  }
  button {
    height: 55px;
    width: 68px;
    cursor: pointer;
    user-select: none;
    border: none;
    border-radius: 0 10px 10px 0;
    color: var(--white);
    background: var(--gun-powder);
    transition: 0.1s ease-in-out;
    &:focus {
      outline: none;
    }
    &:hover {
      color: var(--gun-powder);
      background: var(--white);
    }
  }
`;

interface IProps {
  value: string,
  placeholder: string,
  onChange: () => void,
  onSearch: () => void
}

const SearchBar: FC<IProps> = ({
  onChange,
  onSearch,
  placeholder = 'Search by wallet address...',
  value = '',
}) => {
  const handleKeyDown = (event) => event.keyCode === 13 && onSearch();
  return (
    <SearchBarStyle>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={onSearch}>
        <SearchIcon />
      </button>
    </SearchBarStyle>
  );
};

export default SearchBar;
