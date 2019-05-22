import React from "../../../node_modules/react";
import GlobalCard from "../GlobalCard";
import "./style.css";


function FavoriteResult(props) {
  return (
    <GlobalCard>
    <div className="fav-results">
          <ul className="list-group search-results">
     <strong> 
         Insert FavoritedEvent here</strong>
     {/* {props.results.map(result => ( */}
    {/* key={result}  */}
    <li className="list-group-item">
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </li>
    
    </ul>

      </div>
 </GlobalCard>
  );
          }

export default FavoriteResult;
