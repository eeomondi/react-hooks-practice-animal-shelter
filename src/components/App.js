import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetchPets();
  }, [filters]);

  const fetchPets = async () => {
    let url = "https://zoo-animal-api.herokuapp.com/animals";
    if (filters.type !== "all") {
      url += `?animal_type=${filters.type}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setPets(data);
  };

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    fetchPets();
  };

  const onAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true };
        }
        return pet;
      })
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pet} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;