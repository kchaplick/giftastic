
//create variable to hold array of existing example buttons
var movies = ["The Lion King","The Little Mermaid", "Cinderella","Beauty and the Beast","Aladdin","Toy Story","Up","The Incredibles","The Jungle Book"];
//global variables 
    var state = "still";
    var still = "";
    var animate = "";
 

//create buttons from array
for (var i = 0; i < movies.length; i++){
    var movieButton = $("<button>");
    $(movieButton).attr("class","btn btn-dark mb-2 mr-2 movieButton");
    $(movieButton).attr("data-title", movies[i]);
    $(movieButton).html(movies[i]);
    
    $(".buttonContainer").append(movieButton);
     
 }  
  
  
  
    //ajax 
    var movie = "";
    var queryURL =`https://api.giphy.com/v1/gifs/search?api_key=qlUDI8Aoc6dQqRqwyAD05KgWuV5oLMC6&q=${movie}&limit=9&offset=0&lang=en`
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
          
        



           //variables to hold all of the items we want from API call
           var stillURL = response.data[i].images.downsized_still.url;
           console.log(stillURL);
           var animateURL = response.data[i].images.fixed_width.url
           console.log(animateURL);
           var gifName = response.data[i].title;
           console.log(gifName);
           var rating = response.data[i].rating;
           console.log(rating);

          //for loop 
          for ( var i = 0; i< response.data.length; i++){
            //create a bootstrap card
            var gifCard = $("<div>");
            $(gifCard).attr("class","card")
         
          }
      });