import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.jason";

function App() {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, [filters]);

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    fetchPets();
  };

  const fetchPets = () => {
    let filteredPets = data;
    if (filters.type !== 'all') {
      filteredPets = data.filter((pet) => pet.type === filters.type);
    }
    setPets(filteredPets);
  };

  const onAdoptPet = (id) => {
    const petIndex = pets.findIndex((pet) => pet.id === id);
    if (petIndex !== -1) {
      const updatedPet = { ...pets[petIndex], isAdopted: true };
      const updatedPets = [...pets.slice(0, petIndex), updatedPet, ...pets.slice(petIndex + 1)];
      setPets(updatedPets);
    }
  };

  return (
    <div>
      <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
      <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
    </div>
  );
}

export default App;

/*function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetchPets();
  }, [filters]);

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    fetchPets();
  };

  const fetchPets = () => {
    let filteredPets = data;
    if (filters.type !== 'all') {
      filteredPets = data.filter((pet) => pet.type === filters.type);
    }
    setPets(filteredPets);
  };

  const onAdoptPet = (id) => {
    const petIndex = pets.findIndex((pet) => pet.id === id);
    if (petIndex !== -1) {
      const updatedPet = { ...pets[petIndex], isAdopted: true };
      const updatedPets = [...pets.slice(0, petIndex), updatedPet, ...pets.slice(petIndex + 1)];
      setPets(updatedPets);
    }
  };
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/