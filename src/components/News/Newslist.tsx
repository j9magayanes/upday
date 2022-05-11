import React, { useState } from "react";
import './Newslist.css';
import News from "./News"
import Search from "../Search/Search"
import { REMOVE_CATEGORY, REMOVE_COUNTRY } from "../../actions/actionCreators";
import { connect, useDispatch, useSelector, useStore } from "react-redux";

function Newslist(_props: any) {
  const dispatch = useDispatch();
  const state = useState();
  const store = useStore();
  const category = useSelector(() => store.getState().country);
  const [ country, setCountry] = useState('')

  function handleOnClick() {
    dispatch({
      type: REMOVE_COUNTRY,
    });
    dispatch({
      type: REMOVE_CATEGORY,
    });
  }

  return  <>
      <div className="scroll">
      <Search country={_props.country}/>
      <News/>
      </div>
      {/* <button className="button" onClick={()=> handleOnClick()}>Reset Filter</button> */}
      </>
}
function mapStateToProps(state: { country: any }) {
  const { country } = state;
  return { country: state.country };
}

export default connect(mapStateToProps)(Newslist);
