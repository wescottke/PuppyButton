// alert("test")
var toggle = function(){

	document.getElementsByClassName("text")[0].className = "text cancel";	
	document.getElementsByClassName("dot-wrapper")[0].className = "dot-wrapper visible";
	
	getNewPuppyImage();

}

var printpuppy = function(input){
	console.log(input + "puppy")
}


var getNewPuppyImage = function() {
	$.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=puppy", function(data, status){
	        console.log(data.data.image_original_url);
	        document.getElementsByClassName("puppy-wrapper")[0].innerHTML = "<img src='"+data.data.image_original_url+"' />"
	   		document.getElementsByClassName("dot-wrapper")[0].className = "dot-wrapper";
	   		document.getElementsByClassName("text")[0].className = "text";
	    });
}