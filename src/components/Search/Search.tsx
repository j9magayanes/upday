import { useSelector, useStore } from "react-redux";
import "../Header/Header.css";;

function Search(_props: any){
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);
  const countryString = country.toString()
    return (
     country ?  <div className="latest"><h3>Latest News in {countryString[0].toUpperCase()+countryString.slice(1)} </h3></div> : null 
    )
  }

export default Search;