const generalButton = document.getElementById("searchBtn");

async function searchMovie(name) {
  const url = `https://student-api-proxy.onrender.com/api/advanced-movie-search.p.rapidapi.com/search/movie?query=${name}`;

  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "2c72fe41164758c4f9e06e6d3d06fbab59b0088e893afb8cd56dafc34a03b6ee",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = getsamplemoviesresult.data; //const data = getsamplemovies();
  const movie = data.body;
}

jokes.forEach((movie) => {
  console.log(movie.setup);
  console.log(movie.punchline);
});

loadjokesByType("knock-knock");
