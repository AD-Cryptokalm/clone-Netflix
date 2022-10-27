const API_KEY = "2de1443070a5851805be617de2a6a73c";
const baseUrl = "https://api.themoviedb.org/3";

const RequestsApi =  {
   fetchTrending: `${baseUrl}/trending/all/day?api_key=${API_KEY}`,
   fetchNetflixOriginals: `${baseUrl}/trending/all/week?api_key=${API_KEY}`,
   fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
   fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
   fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
   fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
};

export default RequestsApi;