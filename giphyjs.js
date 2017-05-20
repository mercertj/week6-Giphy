var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
// field for collecting new buttons to make
var topic = ["Dog", "Cat", "Tiger", "Elephant"];

var buttonArray = ["button1", "button2", "button3", "button4"];
// field for inputting new animal. need function to captute input, add animal to button. need function?? Not sure
$("#animal-input").push(topic);
console.log(topic);

var newAnimal = document.getElementById("animal-input").value;

function renderGifs() {
	console.log(this);
	var animal = $(this).attr("gifsGoHere");
	console.log(animal);
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})
	.done(function(response) {
		console.log(response);
		response.data.forEach(function(gif) {
			// document.body.innerHTML += '<br>' + '';
			if (gif.rating !== "r" && gif.rating !== "pg-13") {
				var gifDiv = $("<div class='item'>");
				var rating = gif.rating;
				var p = $("<p>").text("Rating: " + rating);
				var animalImage = $("<img>");
				animalImage.attr("src", gif.images.fixed_height.url);
				gifDiv.append(p);
			    gifDiv.append(animalImage);
			    $("#gifs-appear-here").prepend(gifDiv);
			}
		});
	});
}

		 $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      	var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      		if (state === "still") {
        	$(this).attr("src", $(this).attr("data-animate"));
        	$(this).attr("data-state", "animate");
      	} else {
        	$(this).attr("src", $(this).attr("data-still"));
        	$(this).attr("data-state", "still");
      }
    });
// start/stop animate gifs
	$("#animal-form").on('click', renderGifs);

		$(".gif").on("click", function() {
			var state = $(this).attr("data-state");
			if (state === "still") {
        	$(this).attr("src", $(this).attr("data-animate"));
        	$(this).attr("data-state", "animate");
      } else {
        	$(this).attr("src", $(this).attr("data-still"));
        	$(this).attr("data-state", "still");
      }
    });
// $("button").on("click", function() {
// 	console.log(this);
// 	var animal = $(this).attr("data-person");
// 	console.log(animal);

// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
// 	animal + "&api_key=dc6zaTOxFJmzC&limit=10";

// 	$.ajax({
// 		url: queryURL,
// 		method: 'GET'
// 	})
// 	.done(function(response) {
// 		console.log(response);
// 		response.data.forEach(function(gif) {
// 			// document.body.innerHTML += '<br>' + '';
// 			if (gif.rating !== "r" && gif.rating !== "pg-13") {
// 				var gifDiv = $("<div class='item'>");
// 				var rating = gif.rating;
// 				var p = $("<p>").text("Rating: " + rating);
// 				var animalImage = $("<img>");
// 				animalImage.attr("src", gif.images.fixed_height.url);
// 				gifDiv.append(p);
// 			    gifDiv.append(animalImage);
// 			    $("#gifs-appear-here").prepend(gifDiv);
// 			}
// 		});
// 	});
// });