import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';

import TextField from 'shared/components/TextField/TextField';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        label="Find contacts by name"
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
      />
    </>
  );
};

export default Filter;
