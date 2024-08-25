import React from "react";


import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div>
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
      ))}
    </div>
  );
}


/*function PetBrowser() {
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}*/

export default PetBrowser;