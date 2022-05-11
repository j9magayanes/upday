import "../Header/Header.css";
import Select , { SelectChangeEvent } from '@mui/material/Select';
import { connect, useDispatch, useStore } from "react-redux";
import { ADD_CATEGORY } from "../../actions/actionCreators";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function SearchBar() {
  const dispatch = useDispatch();

  function handleSelectChange(event: { target: { value: any } }) {
    dispatch({
      type: ADD_CATEGORY,
      category: event.target.value,
    });
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-autowidth-label"
        style={{ color: "#000" }}>Select a category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Select a category"
          onChange={handleSelectChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="carbon">Carbon Emission</MenuItem>
          <MenuItem value="wildfire">WildFire</MenuItem>
          <MenuItem value="earthquake">Earthquake</MenuItem>
        </Select>

      </FormControl>
    </div>
    // <FormControl fullWidth >
    //   <Select
    //     labelId="demo-simple-select-label"
    //     id="demo-simple-select"
    //     label="category"
    //     onChange={handleSelectChange}
    //   >
    //     <option value="all" className="option">Select a Category</option>
    //     <option value="carbon" className="option">Carbon Emission</option>
    //     <option value="wildfire" className="option">Wildfire</option>
    //     <option value="earthquake" className="option">Money</option>
    //   </Select>
    // </FormControl>
  );
}

const mapStateToProps = function(state: { category: any }) {
  return { category: state.category };
};

export default (connect(mapStateToProps)(SearchBar));

function dispatch(arg0: { type: string; category: any }) {
  throw new Error("Function not implemented.");
}
function styles(styles: any) {
  throw new Error("Function not implemented.");
}

