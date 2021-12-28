const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
		"x-rapidapi-key": "275d328102mshb2e0d50b294fd06p1e0264jsnf60a1a203717"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

function cambiaColoreBtn() {
    var count = 1;
    function setColor(btn, color) {
        var property = document.getElementById(btn);
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#7FFF00"
            count = 0;
        }
    }
}