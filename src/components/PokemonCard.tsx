import type { Pokemon } from "../types/pokemon";

interface Props {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    const { name, image, description, discovered } = pokemon;

    return (
        <div
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px",
            textAlign: "center",
            backgroundColor: discovered ? "white" : "#ddd",
            opacity: discovered ? 1 : 0.5,
        }}
        >
            {discovered && image && (
                <img src={image} alt={name} width="120" />
            )}
            <h3>{name}</h3>
            {discovered && <p>{description}</p>}
        </div>
    );
};

export default PokemonCard