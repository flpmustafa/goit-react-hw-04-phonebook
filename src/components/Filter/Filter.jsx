import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
    return (
      <>
      <label className={css.filter__label}>
      Finde contact by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
      </label>
      
      </>
    );
  };

  Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
  };
  
  export default Filter;