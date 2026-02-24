import { PokemonListResponse } from "../types/pokemon";

const URL = "https://pokeapi.co/api/v2";

export const getAllPokemon = async (limit = 151) => {
    const response = await fetch(`${URL}/pokemon?limit=${limit}`);

    if (!response.ok) {
        throw new Error("Error en la lista de pokemons")
    }

    const data: PokemonListResponse = await response.json();
    return data.results;
};

export const getPokemonByName = async (name: string) => {
    const response = await fetch(`${URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Pokemon no encontrado");
    }

    return await response.json();
}