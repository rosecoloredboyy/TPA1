const url = "https://api.themoviedb.org/3/discover/movie?api_key=d82562c7f0fe44ee5d271b13bfc5dab9&sort_by=popularity.desc";
const img = "https://image.tmdb.org/t/p/w500";
const searchAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=d82562c7f0fe44ee5d271b13bfc5dab9&query=";


const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(url);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

// list film
function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, release_date } = movie;
        const movieS = document.createElement("div");
        movieS.classList.add("movie");
        movieS.innerHTML = `
        <div id="card">
        <img src="${img + poster_path}" alt="${title}"/>
            <div class="movie-info">
                <h3 class="title">${title}</h3>
                <p class="vote">${vote_average}</p>
            </div>
            <p class="releaseDate">${release_date}</p>    
        </div>
        `;

        main.appendChild(movieS);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(searchAPI + searchTerm);

        search.value = "";
    }
});