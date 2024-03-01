import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("dog");
    // const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropDown("Breed", "", breeds);

    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </label>

                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
