"use strict";

fetch("http://api.openweathermap.org/data/2.5/weather?q=aarhus,&APPID=16ff0abf442352600a5df9db0f7a03cd&units=metric")

    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        document.getElementById("temperatur").innerHTML = "Temperatur: " + post.main.temp;

        document.getElementById("beskrivelse").innerHTML = post.weather[0].description;
    //regn
     if (post.weather[0].id === 500) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    else if (post.weather[0].id ===  501) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    else if (post.weather[0].id === 502) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    
    else if (post.weather[0].id === 503) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
     else if (post.weather[0].id === 504) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    
     else if (post.weather[0].id === 511) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    
       else if (post.weather[0].id === 520) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    else if (post.weather[0].id === 521) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    
     else if (post.weather[0].id === 522) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="regn.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Read a good book inside to avoid getting wet");}
    
    //sol
         else if (post.weather[0].id === 800) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sol.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Perfect weather to go outside and read a book");
        }  
    //sol og sky
          else if (post.weather[0].id === 801) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sol-og-sky.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a ray of sun and read outside");
        } 
    //skyer
    else if (post.weather[0].id === 802) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="skyer.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "watch out for rain, better stay inside and read");}
    
    else if (post.weather[0].id === 803) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="skyer.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "watch out for rain, better stay inside and read");} 
    
  else if (post.weather[0].id === 804) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="skyer.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "watch out for rain, better stay inside and read");}    
    
//sne    
          else if (post.weather[0].id === 600) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    else if (post.weather[0].id === 601) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");}
else if (post.weather[0].id === 602) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");}       
 else if (post.weather[0].id === 611 ) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");}        
else if (post.weather[0].id ===612) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    else if (post.weather[0].id ===613 ) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
      else if (post.weather[0].id === 615) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    else if (post.weather[0].id ===616 ) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    else if (post.weather[0].id ===620 ) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    else if (post.weather[0].id ===621) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
     else if (post.weather[0].id ===622) {
            document.getElementById("vejret").insertAdjacentHTML('beforeend', '<p><img src="sne.png" alt="Vejrikon"><p/>');

            document.getElementById("vejret").insertAdjacentHTML('beforeend', "Find a warm place and curl up with a good book");} 
    
    })

