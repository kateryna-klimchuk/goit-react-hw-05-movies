import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const DetailsWrapper = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;

  display: flex;
  column-gap: 40px;
  border-top: 1px solid grey;
`;
export const LinkWrapper = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const LinkBack = styled(Link)`
  display: flex;
  padding: 20px;
  font-size: 18px;
  align-items: center;
  column-gap: 10px;
`;

export const GenresList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  column-gap: 10px;
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Rating = styled.span`
  background-color: orangered;
  padding: 1px 4px;
  border-radius: 2px;
`;
export const LowRating = styled(Rating)`
  background-color: grey;
  opacity: 0.6;
`;
