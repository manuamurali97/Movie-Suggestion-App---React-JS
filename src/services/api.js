const API_KEY = "490dc071d112599c2475d758c079b1cc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await reponse.json();
    return data.results;
};

export const searchPopularMovies = async (query) => {
    const reponse = await fetch(`${BASE_URL}/movie/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await reponse.json();
    return data.results;
};