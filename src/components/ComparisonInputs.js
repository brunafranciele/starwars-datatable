import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/comparison.css';

function ComparisonInputs() {
  const magic = 0;
  const { setFilters, filters } = useContext(StarWarsContext);
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [localValue, setLocalValue] = useState(magic);

  const setLocalState = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: localColumn,
          comparison: localComparison,
          value: localValue,
        },
      ],
    });
  };

  const reset = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    });
    setLocalColumn('');
    setLocalComparison('');
    setLocalValue('');
  }

  return (
    <div data-testid="filter">
      <select
        className="select"
        data-testid="column-filter"
        onChange={({ target }) => setLocalColumn(target.value)}
        value={localColumn}
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        className="select"
        data-testid="comparison-filter"
        onChange={({ target }) => setLocalComparison(target.value)}
        value={localComparison}
      >
        <option>Bigger Then</option>
        <option>Less Than</option>
        <option>Equal To</option>
      </select>
      <input
        className="inputComparison"
        data-testid="value-filter"
        type="number"
        onChange={({ target }) => setLocalValue(target.value)}
        value={ localValue }
      />
      <button
        data-testid="filter"
        type="button"
        onClick={() => reset()}
      >
        Reset Filter
      </button>
      <button
        type="button"
        data-testid="button-filter"
        onClick={setLocalState}
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default ComparisonInputs;
