import type { Pokemon } from "../types/pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
    pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList