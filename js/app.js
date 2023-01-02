var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches) {
  itemWrapper.innerHTML = '';

  if(!matches) {
    return itemWrapper.innerHTML = '<p class="no-search">No results found.</p>'
  } 
  
  for (var match of matches) {
    itemWrapper.insertAdjacentHTML('beforeend', `
    <div class="movie-item" style="background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${match.Poster});">
      <h3>${match.Title}</h3>
      <p>Release Year: ${match.Year}</p>
      <a href="https://www.imdb.com/title/${match.imdbID}" target="_blank">View more details.</a>
    </div>
    `)
  }
}

function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.trim()
  
  if (keyCode === 13 && searchText) {
    var responsePromise = fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2fd1d9f2&s=${searchText}`);
    
    function handleResponse(responseObj) {
      return responseObj.json();
    }
    
    responsePromise
      .then(handleResponse)
      .then(function(data){
        displayMatches(data.Search);
      })

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