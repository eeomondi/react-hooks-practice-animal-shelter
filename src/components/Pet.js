import React from "react";

function Pet({ pet, onAdoptPet }) {
  const genderSymbol = pet.gender === "female" ? "♀" : "♂";
  const adoptionButton = pet.isAdopted ? (
    <button className="ui disabled button">Already adopted</button>
  ) : (
    <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>
      Adopt pet
    </button>
  );

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {genderSymbol} {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">{adoptionButton}</div>
    </div>
  );
}

export default Pet;

/*function Pet() {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' 
          PET NAME
        </span>
        <div className="meta">
          <span className="date">PET TYPE</span>
        </div>
        <div className="description">
          <p>Age: PET AGE</p>
          <p>Weight: PET WEIGHT</p>
        </div>
      </div>
      <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;*/