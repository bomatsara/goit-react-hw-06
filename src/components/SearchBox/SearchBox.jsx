import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const fieldIds = {
    search: useId(),
  };

  const dispatch = useDispatch();

  return (
    <div className={css['search-box']}>
      <div className={css['form-row']}>
        <label htmlFor={fieldIds.search} className={css['form-label']}>Find contacts by name</label>
        <input
          className={css['form-input']}
          type="text" name="search"
          id={fieldIds.search}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
}