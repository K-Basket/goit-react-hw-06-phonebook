// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector } from 'store/app/selectorsApp';
import { setFilter } from 'store/app/appSlice';

export function Filter() {
  const { filter } = useSelector(appSelector);
  const dispatch = useDispatch();

  function changeFilter(evt) {
    dispatch(setFilter(evt.currentTarget.value));
  }

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };
