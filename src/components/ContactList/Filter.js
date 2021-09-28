import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
export default function Filter({ value = ' ', handlChange }) {
  return (
    <>
      <TextField
        id="standard-search"
        label="Find contacts by name"
        type="search"
        variant="standard"
        value={value}
        onChange={handlChange}
      />
    </>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  handlChange: PropTypes.func,
};
