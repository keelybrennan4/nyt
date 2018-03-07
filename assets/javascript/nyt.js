alert ("hi");

function displayNewsInfo() {
    var APIkey = "bbec1515ecc34068a2d5f908e200cd59";
    var queryURL = "https://api.nytimes.com/svc/search/v1/article?format=json&query=?&api-key=" + APIkey + "";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).done(function(result) {
        console.log(result);
    }
   
)

}
displayNewsInfo ();
