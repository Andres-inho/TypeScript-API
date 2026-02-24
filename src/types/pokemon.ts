export interface Pokemon {
    name: string;
    url: string;
    discovered: boolean;
    image?: string;
    description?: string;
}

export interface PokemonListResponse {
    results: {
        name: string;
        url: string;
    }[];
}