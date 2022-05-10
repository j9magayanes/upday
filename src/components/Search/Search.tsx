import { useSelector, useStore } from "react-redux";
import "../Header/Header.css";;

function Search(_props: any){
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);
  const countryString = country.toString()
    return (
     country ?  <div className="search">NEWS IN {countryString.toUpperCase()} </div> : null 
    )
  }

export default Search;