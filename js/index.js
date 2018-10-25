(() => {
  
  const submitBtn = document.querySelector('#poster-search-btn');
  const apiKey= config.MOVIE_DB_KEY;
  const baseURL = 'https://api.themoviedb.org/3';

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let movieInput = document.querySelector('#poster-search-input').value;
    fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${movieInput}`)
      .then(res => console.log(res.json()));
  });

})();

// ## Project

// Using any language and/or framework of your choosing create an application that allows a user to search The Movie DB's API (https://www.themoviedb.org/documentation/api).

// ### Requirements:
//  - The app should output a single page to the user with a search bar and the results listed below.
//  - Result Movie Posters should be displayed in a grid as the results.
//  - Only 10 results need to be displayed, there is no need for pagination.
//  - Publish your finished project on Github and email a link to jcarlos@stepstoneglobal.com