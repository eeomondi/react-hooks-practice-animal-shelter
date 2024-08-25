import React from "react";

function Pet() {
  const handleAdoptPet = () => {
    onAdoptPet(pet.id);
  };

  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        <p>Gender: {pet.gender === 'male' ? '♂' : '♀'}</p>
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

export default Pet;