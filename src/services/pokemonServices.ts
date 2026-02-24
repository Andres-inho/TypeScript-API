import { getAllPokemon, getPokemonByName } from "../API/pokemonAPI";
import type { Pokemon } from "../types/pokemon";

export const fetchPokemonList = async (): Promise<Pokemon[]> => {
    const pokemons = await getAllPokemon();

    return pokemons.map(({ name, url }) => ({
        name,
        url,
        discovered: false,
    }));
};

export const fetchPokemonDetils = async (name: string) => {
    const data = await getPokemonByName(name);

    const { sprites, height, weight, types} = data;

    return {
        image: sprites.front_default,
        description: `Altura: ${height} | Peso: ${weight} | Tipo: ${types
            .map((t: any) => t.type.name)
            .join(", ")}`,
    };
};