import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const SearchLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 1px solid grey;

  &:hover {
    padding: 6px;
    border-radius: 4px;
    box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.78);
  }
`;
