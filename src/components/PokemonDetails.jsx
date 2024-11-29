/* eslint-disable react/button-has-type */
import React from "react";

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48 mx-auto md:mx-0"
          />
          <div className="mt-4 md:mt-0 w-full md:ml-8">
            <h3 className="text-xl font-semibold mb-2">Types</h3>
            <div className="flex space-x-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className="px-2 py-1 bg-gray-200 rounded-full text-sm capitalize"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">Abilities</h3>
            <ul className="list-disc list-inside mb-4">
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name} className="capitalize">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Stats</h3>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="mb-2">
                  <span className="capitalize">{stat.stat.name}:</span>{" "}
                  <span className="font-semibold">{stat.base_stat}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
