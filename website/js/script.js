const generalButton = document.querySelector(".general-button");
const programingButton = document.getElementById("programming-button");
const searchInput = document.querySelector("search-box");
const MovieList = document.querySelector(".list-group ");

const loadmovieByTyye = async (Movietype) => {
  const url = `https://student-api-proxy.onrender.com/api/advanced-movie-search.p.rapidapi.com/search/movie?query=${type}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "2c72fe41164758c4f9e06e6d3d06fbab59b0088e893afb8cd56dafc34a03b6ee",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data; //getSampleProgrammingMovie();//
  const movie = data.body;

  MovieList.innerHTML = "";

  movie.forEach((movie) => {
    const listItem = (
      <li class="list group-item">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-year">${movie.year}</div>
        <div class="movie-genre">${movie.genre}</div>
      </li>
    );
    MovieList.insertAdjacentElement("beforeend", listItem);
    console.log(movie.title);
    console.log(movie.year);
    console.log(movie.genre);
  });
};

const loadmovieByType = async (type) => {
  const url = `https://student-api-proxy.onrender.com/api/advanced-movie-search.p.rapidapi.com/search/movie?query=${searchTerm}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "2c72fe41164758c4f9e06e6d3d06fbab59b0088e893afb8cd56dafc34a03b6ee",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data; //const data = getsamplemovies();

  const jokes = data.body;
  jokeslist.innerHTML = "";


Movie.forEach((movie) => {
  console.log(movie.setup);
  console.log(movie.punchline);
});

loadmovieByType("knock-knock");
