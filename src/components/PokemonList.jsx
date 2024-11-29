/* eslint-disable lines-around-directive */
"use client";
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import PokemonDetails from "./PokemonDetails";
import SearchInput from "./SearchInput";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(0);
  const [selectedPoekmon, setSelectedPokemon] = useState({});
  const limit = 12;

  useEffect(() => {
    try {
      fetchPokemon();
    } catch (err) {
      console.log(err);
    }
  }, [offset]);

  const onSelectPokemon = (p) => {
    setSelectedPokemon(p);
  };

  const fetchPokemon = async () => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );
    const data = await response.json();
    const results = await Promise.all(
      data.results.map(async (pokemons) => {
        const res = await fetch(pokemons.url);
        return res.json();
      }),
    );
    setPokemon(results);
    setLoading(false);
  };
  if (loading) {
    return <Loader />;
  }
  if (selectedPoekmon.id) {
    return (
      <PokemonDetails
        pokemon={selectedPoekmon}
        onClose={() => {
          setSelectedPokemon({});
        }}
      />
    );
  }

  const onSearch = (value) => {
    setSearchText(value.trim());
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div>
      <SearchInput onSearch={onSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            onSelect={() => onSelectPokemon(p)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setOffset((prev) => prev - limit)}
          disabled={offset === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setOffset((prev) => prev + limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
