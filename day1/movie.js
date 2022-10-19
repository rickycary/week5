// variable for api ket
const apiKey = "17151785"

// variable for base url
const baseURL = "http://www.omdbapi.com/"

// function that does movie search
function movieSearch(title){
    // constructing url for request
    const url = `${baseURL}?t=${title}&apikey=${apiKey}`
    
    // make our request
    $.ajax(url)
    .then((movie) => {
        console.log(movie)

        // render the data
        const $main = $("main")
        $main.empty()

        $main.html(`
        <h1>${movie.Title}</h1>
        <img src="${movie.Poster}">
        <h1>Cast: ${movie.Actors}</h1>
        <h1>Runtime: ${movie.Runtime}</h1>
        <h1>Rating: ${movie.Rated}</h1>
        <h1>IMDB Score: ${movie.imdbRating}</h1>


        `)
    })

}

// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    movieSearch(inputText)
})

movieSearch("Terrifier 2")