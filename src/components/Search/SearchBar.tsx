import "../Header/Header.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect, useDispatch, useStore } from "react-redux";
import { ADD_CATEGORY } from "../../actions/actionCreators";

function SearchBar() {
  const dispatch = useDispatch();

  function handleSelectChange(event: { target: { value: any } }) {
    dispatch({
      type: ADD_CATEGORY,
      category: event.target.value,
    });
  }

  return (
    <FormControl fullWidth >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="category"
        onChange={handleSelectChange}
      >
        <option value="all" className="option">Select a Category</option>
        <option value="carbon" className="option">Carbon Emission</option>
        <option value="wildfire" className="option">Wildfire</option>
        <option value="earthquake" className="option">Money</option>
      </Select>
    </FormControl>
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

