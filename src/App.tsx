import { useEffect, useState } from 'react'
import './App.css'
import type { Pokemon } from './types/pokemon'
import { fetchPokemonDetils, fetchPokemonList } from './services/pokemonServices';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const load = async() => {
      const data = await fetchPokemonList();
      setPokemons(data);
    }
    load()
  }, []);

  const handleSearch = async (name: string) => {
    try {
      const detail = await fetchPokemonDetils(name);

      setPokemons((prev) => 
        prev.map((pokemon) =>
          pokemon.name === name
            ? { ...pokemon, ...detail, discovered: true }
            : pokemon
        )
      );
    } catch {
      alert("Pokemon no encontrado");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>PokeAPI App</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App
