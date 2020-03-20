    fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus,dk&APPID=8ca08633bb900682d0e35b154eb1b0c0&units=metric")
        .then(function (data) {
            return data.json();
        })
        .then(function (post) {
            document.getElementById("vejretAarh").innerHTML = "Temperatur: " + post.main.temp + "<br> Beskrivelse: " + post.weather[0].description;
            document.getElementById("vejretAarh").insertAdjacentHTML('beforeend', '<p><img src="http://openweathermap.org/img/wn/' + post.weather[0].icon + '@2x.png" alt="Vejrikon"></p>');
            if (post.weather[0].id === 804) {

                document.getElementById("vejretAarh").insertAdjacentHTML('beforeend', "Husk varmt tøj og paraply. Så du kan læse udenfor.");
            }
   })



 var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}