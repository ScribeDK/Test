var faceApiKey  = "88ee016e54cec327a568b7a6c13c893b";
var faceApiSecret = " L49upHZ3wsjLB7y_Q1YZhT-zi1fyrxYp";


//input user image file
$('.btn-upload').on('click', function() {
	
	var form = document.getElementById('file-form');
	var fileSelect = document.getElementById('file-select');
	var uploadButton = document.getElementById('upload-button');

	form.onsubmit = function(event) {
	event.preventDefault();

	// Update button text.
	uploadButton.innerHTML = 'Uploading...';
	
	// Create a new FormData object.
	var formData = new FormData();
	}
	
	formData.append('photo', file, file.name);
	
	//var isImage = false;
	//var fileType = imgFile.split(".");
	
//if (fileType[fileType.length - 1] == "jpg"){
	//isImage = true;
//}

return false;
});

var imageData = "http://www.faceplusplus.com/wp-content/themes/faceplusplus/assets/img/demo/thumbnail/1.jpg"

runQuery(imageData);

function runQuery(imageData) {
	
	var queryURL = "https://apius.faceplusplus.com/v2/detection/detect?url=" + imageData + "&api_secret=" + faceApiSecret + "&api_key=" + faceApiKey + "&attribute=glass,pose,gender,age,race,smiling"
	
	$.ajax({
            url: queryURL,
            method: "GET"
        })
		.done(function(FacePlus) {
			console.log(FacePlus);
        });

}
