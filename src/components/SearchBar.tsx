import React, { useState } from "react";

interface Props {
    onSearch: (name: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(search.toLowerCase());
        setSearch("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Buscar pokemon.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar