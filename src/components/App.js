import React, { useState } from "react";
import PetBrowser from "./PetBrowser";


function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Buddy", type: "dog", age: 2, weight: 20, gender: "male", isAdopted: false },
    { id: 2, name: "Whiskers", type: "cat", age: 1, weight: 10, gender: "female", isAdopted: false },
    { id: 3, name: "Fido", type: "dog", age: 3, weight: 30, gender: "male", isAdopted: false },
    { id: 4, name: "Mittens", type: "cat", age: 2, weight: 15, gender: "female", isAdopted: false },
  ]);

  const [animalType, setAnimalType] = useState("all");
  const [filteredPets, setFilteredPets] = useState(pets);

  
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

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
    if (event.target.value === "all") {
      setFilteredPets(pets);
    } else {
      setFilteredPets(pets.filter((pet) => pet.type === event.target.value));
    }
  };

  const handleFindPetsClick = () => {
    if (animalType === "all") {
      setFilteredPets(pets);
    } else {
      setFilteredPets(pets.filter((pet) => pet.type === animalType));
    }
  };

  const handleAdoptPet = (petId) => {
    setPets(pets.map((pet) => (pet.id === petId ? { ...pet, isAdopted: true } : pet)));
  };

  return (
    <div>
      <h1>Pet Adoption</h1>
      <select value={animalType} onChange={handleAnimalTypeChange}>
        <option value="all">All</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </select>
      <button onClick={handleFindPetsClick}>Find pets</button>
      <PetBrowser pets={filteredPets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;
/*import React, { useEffect, useState } from "react";

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

export default App;*/