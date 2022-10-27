const API_KEY = "2de1443070a5851805be617de2a6a73c";
const baseUrl = "https://api.themoviedb.org/3";

const RequestsApi =  {
   fetchTrending: `${baseUrl}/trending/all/day?api_keys=${API_KEY}`,
   fetchNetflixOriginals: `${baseUrl}/trending/all/week?api_keys=${API_KEY}`,
   fetchTopRated: `${baseUrl}/movie/top_rated?api_keys=${API_KEY}&language=en=US`,
   fetchActionMovies: `${baseUrl}/discover/movie?api_keys=${API_KEY}&width_genres=28`,
   fetchComedyMovies: `${baseUrl}/discover/movie?api_keys=${API_KEY}&width_genres=35`,
   fetchHorrorMovies: `${baseUrl}/discover/movie?api_keys=${API_KEY}&width_genres=27`,
   fetchRomanceMovies: `${baseUrl}/discover/movie?api_keys=${API_KEY}&width_genres=10749`,
   fetchDocumentaries: `${baseUrl}/discover/movie?api_keys=${API_KEY}&width_genres=99`,
};

export default RequestsApi;