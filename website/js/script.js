const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const resultsList = document.getElementById("resultsList");

const apiKey =
  "2c72fe41164758c4f9e06e6d3d06fbab59b0088e893afb8cd56dafc34a03b6ee";

searchBtn.addEventListener("click", () => {
  const movieName = movieInput.value.trim();
  if (movieName) {
    searchMovie(movieName);
  }
});

async function searchMovie(name) {
  resultsList.innerHTML = '<div class="col-12 text-center">Searching...</div>';

  // The endpoint for "Search by Name"
  const url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${UseSearchByName}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    displayResults(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
    resultsList.innerHTML =
      '<div class="col-12 text-danger text-center">Error fetching data. Check console.</div>';
  }
}

function displayResults(movies) {
  resultsList.innerHTML = ""; // Clear previous results

  if (!movies || movies.length === 0) {
    resultsList.innerHTML = '<p class="text-center w-100">No movies found.</p>';
    return;
  }

  movies.forEach((movie) => {
    const poster = movie.poster_path
      ? movie.poster_path
      : "https://via.placeholder.com/500x750?text=No+Image";

    const cardHtml = `
            <div class="col">
                <div class="card h-100 bg-secondary border-0 shadow">
                    <img src="${poster}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title text-white">${movie.title}</h5>
                        <p class="card-text text-light small">${movie.release_date || "N/A"}</p>
                        <p class="card-text text-truncate">${movie.overview}</p>
                    </div>
                </div>
            </div>
        `;
    resultsList.insertAdjacentHTML("beforeend", cardHtml);
  });
}
