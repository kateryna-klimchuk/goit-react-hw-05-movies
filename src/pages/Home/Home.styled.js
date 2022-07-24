import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeLink = styled(Link)`
  list-style: none;
  min-width: 100%;
  text-decoration: none;
  border-bottom: 1px solid grey;

  &:hover {
    padding: 4px;
    border-radius: 4px;
    box-shadow: 1px 2px 10px 3px rgba(0, 0, 0, 0.78);
  }
`;
export const MovieList = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Title = styled.h2`
  padding-top: 20px;
`;
