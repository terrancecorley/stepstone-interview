(() => {
  
  const submitBtn = document.querySelector('#poster-search-btn');
  const apiKey= process.env.MOVIE_DB_KEY || config.MOVIE_DB_KEY;
  const baseURL = 'https://api.themoviedb.org/3';
  const basePosterPath = 'https://image.tmdb.org/t/p/w500';

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let movieInput = document.querySelector('#poster-search-input').value;
    let movieList = document.querySelector('#poster-search-results');
    let movies = '';

    fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${movieInput}`)
      .then(res => res.json())
      .then(res => res.results)
      .then(posters => posters.slice(0, 10))
      .then(posters => posters.map((poster, index) => {
        if (poster.poster_path === null) {
          posters.splice(index, 1);
        } else {
          let movieSrc = basePosterPath + poster.poster_path;
          let movieAlt = `${movieInput} movie poster`;
          movies += `
            <li class="poster">
              <img
                src="${movieSrc}"
                alt="${movieAlt}" />
            </li>
          `;
        }
      }))
      .then(() => movieList.innerHTML = movies);
  });

})();