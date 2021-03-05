import React, { FC } from 'react';
import styled from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';
import applyTransparence from 'helpers/transparentize';
import { SearchIcon } from '../icons';

const SearchBarStyle = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  height: 55px;

  input {    
    width: calc(100% - 68px);
    padding: 18px 20px;
    font-family: ${fonts.secondary};
    font-size: 16px;
    border-radius: 10px 0 0 10px;
    border: 1px solid ${colorVariables.gunPowder};
    color: ${colorVariables.white};
    background-color: ${applyTransparence(0.35, colorVariables.gunPowder)};
    transition: 0.1s ease-in-out;
    &::placeholder {
      color: ${colorVariables.kimberly};
    }
    &:focus,
    &:hover {
      outline: none;
      color: ${colorVariables.white};
    }
  }
  button {
    height: 55px;
    width: 68px;
    cursor: pointer;
    user-select: none;
    border: none;
    border-radius: 0 10px 10px 0;
    color: ${colorVariables.white};
    background: ${colorVariables.gunPowder};
    transition: 0.1s ease-in-out;
    &:focus {
      outline: none;
    }
    &:hover {
      color: ${colorVariables.gunPowder};
      background: ${colorVariables.white};
    }
  }
`;

interface IProps {
  value: string,
  placeholder: string,
  onChange: React.ChangeEvent<HTMLInputElement>,
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
