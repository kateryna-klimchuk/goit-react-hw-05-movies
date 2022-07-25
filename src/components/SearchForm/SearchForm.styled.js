import styled from 'styled-components';

export const SearchForm = styled.form`
  padding-top: 20px;
  margin-top: 20px;
  min-width: 400px;
  display: flex;
  align-item: center;
`;

export const SearchInput = styled.input`
  border: 1px solid grey;
  padding: 10px 20px;
  min-width: 250px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 44px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: orangered;
  color: white;
  &:hover {
    opacity: 1;
  }
`;
