import React, { useState } from 'react';
import styled from 'styled-components';
import useStats from '../utils/useStats';
import Stats from './Stats';

const CountrySelect = styled.select`
	font-size: 18px;
	font-weight: 600;
	background: #6B2737;
	color: #e4fde1
`

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Current Country: {selectedCountry}</h2>
      <CountrySelect className="countrySelect"
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[country]}
            key={country}
            value={countries.iso3[country]}
          >
            {country}
          </option>
        ))}
      </CountrySelect>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}