import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import logo from '../images/logo.png';
import '../style/nameInput.css';

function SearchInput() {
  const { getFilterName } = useContext(StarWarsContext);

  return (
    <div>
      <div className="image">
        <img src={logo} alt="logo star wars" />
      </div>
      <div>
        <label className="labelName" htmlFor="name-filter">
          Search by name:
        <input
            className="inputName"
            name="name-filter"
            data-testid="name-filter"
            type="text"
            onChange={({ target }) => getFilterName(target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default SearchInput;
