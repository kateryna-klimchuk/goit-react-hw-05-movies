import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import { SearchForm, SearchInput, SearchButton } from './SearchForm.styled.js';

const Form = ({ handleSubmit }) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <BiSearch size={18} />
      </SearchButton>
    </SearchForm>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
