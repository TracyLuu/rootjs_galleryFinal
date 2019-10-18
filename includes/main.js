/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];



// .on('click','button', function(){
// 	console.log('click handler added by delegate on')
// })

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();


	$("#gallery").on("click",".imageGallery", onImageClick)
	

}

function makeGallery(imageArray){

	//use loops and jquery dom creation to make the html structure inside the #gallery section

	for (var pictureNumber = 0;pictureNumber<imageArray.length;pictureNumber++){
		// console.log("picture number",pictureNumber)
		/*
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-2.jpg);">
			<figcaption>landscape-2.jpg</figcaption>
		</figure>
		*/
		var figure = $('<figure>');
		figure.addClass('imageGallery col-xs-12 col-sm-6 col-md-4');
		figure.css('background-image', 'url('+imageArray[pictureNumber]+')')
		figure.data("url", imageArray[pictureNumber])
		$('#gallery').append(figure);

		// console.log(imageArray[pictureNumber])

		// console.log('figure',figure.data());


	}
	
	
	//create a loop to go through the images in the imageArray
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section
	
	// side note: make sure to remove the hard coded html in the index.html when you are done!

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	
	$('#image-output').on('click', function() { 
		$('#galleryModal').modal('hide')
	  });

	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
	
}

function onImageClick(){
	
	var src = $(this).data("url")
	// console.log('source', src);
	$('#image-output').attr('src', src);
	$('#galleryModal').modal('show');

	var urlGiven = $(this).css('background-image');
	var urlBegin = urlGiven.lastIndexOf('/')+1;
	var urlEnd = urlGiven.lastIndexOf('.');
	var cleanUrl = urlGiven.slice(urlBegin, urlEnd);

	// console.log('cleanUrl', cleanUrl);

	var title = $('.modal-title').text(cleanUrl);

	// console.log('new title displayed', title);

	$('.modal-body').attr('src', urlGiven);
	
	$('#galleryModal').modal();
}


function displayImage(){
	/* I did this section in the previous function and decided to just use .
	//	Rearranged this section to place in the function above.
	//find the url of the image by grabbing the background-image source, store it in a variable

	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 

	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp


}




