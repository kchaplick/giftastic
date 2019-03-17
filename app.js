
//create variable to hold array of existing example buttons
var movies = ["The Lion King", "The Little Mermaid", "Cinderella", "Beauty and the Beast", "Aladdin", "Toy Story", "Up", "The Incredibles", "The Jungle Book"];
//global variables 
var state = "still";
var still = "";
var animate = "";


//create buttons from array
for (var i = 0; i < movies.length; i++) {
    var movieButton = $("<button>");
    $(movieButton).attr("class", "btn btn-light mb-2 mr-2 movieButton");
    $(movieButton).attr("data-title", movies[i]);
    $(movieButton).html(movies[i]);
    $(".buttonContainer").append(movieButton);
}

//create button from search
$(".search").click(function (event) {
    event.preventDefault();
    var searchInput = $("#search").val();
    console.log(searchInput);
    var searchButton = $("<button>");
    $(searchButton).attr("class", "btn btn-light mb-2 mr-2 movieButton");
    $(searchButton).attr("data-title", searchInput);
    $(searchButton).html(searchInput);
    $(".buttonContainer").append(searchButton);
});

//onclick to push title to queryurl
$(document).on("click", ".movieButton", displayGif);

function displayGif() {
    //ajax 
    var movie = $(this).attr("data-title");
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=qlUDI8Aoc6dQqRqwyAD05KgWuV5oLMC6&q=${movie}&limit=9&offset=0&lang=en`
    

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        //for loop 
        for (var i = 0; i < response.data.length; i++) {
            //variables to hold all of the items we want from API call
        var stillURL = response.data[i].images.downsized_still.url;
        console.log(stillURL);
        var animateURL = response.data[i].images.fixed_width.url
        console.log(animateURL);
        var gifName = response.data[i].title;
        console.log(gifName);
        var rating = response.data[i].rating;
        console.log(rating);

            //create a bootstrap card
            var gifCard = $("<div>");
            $(gifCard).attr("class", "card  gifCard mr-10")
            $(gifCard).attr("style", "width: 18rem;")
            $(".gifContainer").append(gifCard); 
            //create img and append to card
            var gifImg = $("<img>");
            $(gifImg).attr("src",stillURL);
            $(gifImg).attr("class", `card-img-top gifImg`);
            $(gifImg).attr("data-state", `${state}`);
            $(gifImg).attr("data-still", `${stillURL}`);
            $(gifImg).attr("data-animate", `${animateURL}`);
            console.log(state);
            $(gifCard).append(gifImg);
            //create text body and append to img
            var gifInfoContainer = $("<div>");
            $(gifInfoContainer).attr("class", "card-body mb-10");
            $(gifCard).append(gifInfoContainer);
             //create para and append to img
             var gifTitle = $("<p>");
            $(gifTitle).attr("class", "card-text");
            $(gifTitle).text(gifName);
            $(gifInfoContainer).append(gifTitle); 
            var gifRating = $("<p>");
            $(gifRating).attr("class", "card-text");
            $(gifRating).text(rating);
            $(gifTitle).append(gifRating); 

        };
    });
};

//onclick for gif animation
$(document).on("click", ".gifImg", function(){
    var getState = $(this).data("state");
    var still = $(this).data("still");
    var animate = $(this).data("animate");
    console.log("After click state is " + getState);

    if (getState == "still"){
        $(this).attr("src",animate);
        $(this).data('state',"animate");
        alert($(this).data("state"));
    

    } else{
        $(this).attr("src",still);
        $(this).data('state',"still");
        
        
    }

})