import React from "../../node_modules/react";
import Hero from "../components/Hero";
import GlobalCard from "../components/GlobalCard";
import Container from "../components/Container";
import FavCard from "../components/FavCard";
import Wrapper from "../components/Wrapper";
// import FavoriteResult from "../components/FavoriteResult";
import FavoriteResult from "../components/FavoriteResult";
import RegContainer from "../components/RegContainer";
function Favorites() {
  return (
    <div>
      <Wrapper>
     
        <RegContainer>
      
          <GlobalCard>
          
           <FavCard />
           </GlobalCard>
        
</RegContainer>

      </Wrapper>
    </div>
  );
}

export default Favorites;
