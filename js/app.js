var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches) {
  itemWrapper.innerHTML = '';
  
  for (match of matches) {
    itemWrapper.insertAdjacentHTML('beforeend', `
    <div class="movie-item" style="background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${match.image_url});">
      <h3>${match.title}</h3>
      <p>${match.description}</p>
      <a href="${match.imdb_url}">View more details.</a>
    </div>
    `)
  }
}

function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.trim()
  
  if (keyCode === 13 && searchText) {
    var matches = [];

    for (movie of movieData) {
      if (movie.title.toLowerCase().includes(searchText)) {
        matches.push(movie);
      }
    }

    var responsePromise = fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2fd1d9f2&t=drive')
      
    function handleResponse(responseObj) {
      return responseObj.json();
    }

    responsePromise
      .then(handleResponse)
      .then(function(data) {
        console.log(data);
        return 'this is cool'
      }) 
      .then(function(huh) {
        console.log(huh);
      })





    displayMatches(matches);
  }
}


function init() {
  searchInput.addEventListener('keydown', getMovieData)
}

init()

// Grab html elements
// Get the inputs value on enter key press
// Grab data related to the users search
// Inject the movie items into the DOM based on users search











/*
<div class="movie-item">
  <h3>Movie Title</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <a href="#">View more details.</a>
</div>
*/