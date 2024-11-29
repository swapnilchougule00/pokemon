/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

const PokemonCard = ({ pokemon, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer
      hover:shadow-lg transition-shadow"
      onClick={onSelect}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-2 capitalize">
        {pokemon.name}
      </h2>
      <div className="flex justify-center mt-2 space-x-2">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="px-2 py-1 bg-gray-200 rounded-full text-sm capitalize"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
