    
$(function() {

$(document).ajaxComplete(function() {
    setTimeout(function() {
      // hide loader animation and show border with fadeIn effect
      $("#loader").hide();
      $('.border').show().addClass('animated fadeIn');
    }, 400);
  });

// send ajax request to fetch location data
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCB7eXQgDDLJM1Ih386aUUlfMRt9n_oV0w",
    dataType: 'json',
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "1c393233-0c8c-8ef1-3efe-3173b8928077"
    },
 //template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
 template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  
    after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },

	success: function(response) {
      var location = response.location;
			var latitude = location.lat;
			var longitude = location.lng;
			var weatherUrl = 'https://api.apixu.com/v1/current.json?key=c696097710604a5c8a4154155170607&q=' + latitude + ',' + longitude;
      getWeatherInfo(weatherUrl); //this function sends ajax request to weather API
			/*getForecastrInfo(latitude,longitude);*/
			
		}
    }).fail(function() {
     // $('.border').append('<p>Error: Could not load weather data!</p>');
    });
	  
// code for ajax request to weather API
  function getWeatherInfo(url) { 

  $.ajax({
      url: url,
      dataType: 'json',
      success: function(response) {
        var location = response.location;
        var current = response.current;
        $('.location').text(location.name + ', ' + location.country);
        $('.temp_c').html(Math.round(current.temp_c)  + '<a class="cel"> ºC</a>');
        $('.temp_f').html(Math.round(current.temp_f)  + '<a class="fah"> ºF</a>');
	$('.feelslike_c').html(Math.round(current.feelslike_c)  + '<a class="cel"> ºC</a>');
        $('.feelslike_f').html(Math.round(current.feelslike_f)  + '<a class="fah"> ºF</a>');

	/*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
        */$('.wind_dir').html(current.wind_dir);
	$('.wind_kph').html(Math.round(current.wind_kph* 0.27777777777778)  + '<a class="cel"> m/s</a>');
        $('.wind_mph').html(Math.round(current.wind_mph)  + '<a class="fah"> mph</a>');

        $('.text').text(current.condition.text);
        $('.icon').attr('src', current.condition.icon);
    var f = Math.round(current.feelslike_f);
	var c = Math.round(current.feelslike_c); 	      
	var nextButton = document.getElementById('next-button');    
	          
	var userFeed = new Instafeed({  

	get: 'user',
	userId: '6909994807',
	accessToken: '6909994807.1677ed0.128066a7b9984d5392b0143cbde87360',    
   template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
   limit: 1000,
                  // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                nextButton.setAttribute('disabled', 'disabled');
            }               
        },
        success: function() {
        foundImages = 0;
        maxImages = 30;
    },
          //window.setTimeout(function() {
    filter: function(image) {
    
    
    
         if((c == '20'|| f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '19'|| f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '18'|| f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '17'|| f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '16'|| f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '15'|| f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '14'|| f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '13'|| f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '12'|| f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '11'|| f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '10'|| f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '9'|| f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '8'|| f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '7'|| f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '6'|| f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '5'|| f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 

            return false;
     
 }  //filter
                                  //   }, 10000);

}); 
	userFeed.run();
            // bind the load more button
        nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        feed.next();
        });


           
          
	      
	      
      }
    }).fail(function() {
      $('.border').append('<p>Error: Could not load weather data!</p>');
    });
  }
  
  // Initially, temp. is shown in celsius
  $('.temp_f').hide();
  $('.feelslike_f').hide();
  $('.wind_mph').hide();
  
  // code for toggling temp. (celsius/fahrenheit)
  $('.temp_c, .temp_f').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.temp_c').hide();
      $('.temp_f').show();
    } else {
      $('.temp_f').hide();
      $('.temp_c').show();
    }
  });
	$('.feelslike_c, .feelslike_f').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.feelslike_c').hide();
      $('.feelslike_f').show();
    } else {
      $('.feelslike_f').hide();
      $('.feelslike_c').show();
    }
  });
	
	$('.wind_kph, .wind_mph').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.wind_kph').hide();
      $('.wind_mph').show();
    } else {
      $('.wind_mph').hide();
      $('.wind_kph').show();
    }
  });	
	
	    

var galleryFeed = new Instafeed({
  get: "user",
  userId: 6909994807,
  accessToken: "6909994807.1677ed0.128066a7b9984d5392b0143cbde87360",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 6,
  template: '<div class="col-xs-12 col-sm-6 col-md-4">$<span id="{{id}}">0</span><button width="500" height="500" id = add class="button button1" onclick="javascript:add(1)">Add Value</button><button width="500" height="500" id = reset class="button button1" onclick="javascript:reset()">Reset</button><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  
  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><p><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></a><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span> Love it</a></p><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();
var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});


// $("body").on("click",".audioControl", function(e)
// {
//     var ID=$(this).attr("id");
//     var progressArea = $("#audioProgress"+ID);
//     var audioTimer = $("#audioTime"+ID);
//     var audio = $("#audio"+ID);
//     var audioCtrl = $(this);
//     e.preventDefault();
//     var R=$(this).attr('rel');
//     if(R=='play')
//     {
//         $(this).removeClass('audioPlay').addClass('audioPause').attr("rel","pause");
//         audio.trigger('play');
//     }
//     else
//     {
//         $(this).removeClass('audioPause').addClass('audioPlay').attr("rel","play");
//         audio.trigger('pause');
//     }

//     audio.bind("timeupdate", function(e)
//     {
//         var audioDOM = audio.get(0);
//         audioTimer.text(getAudioTimeByDec(audioDOM.currentTime,audioDOM.duration));
//       var audioPos = (audioDOM.currentTime / audioDOM.duration) * 100;
//         progressArea.css('width',audioPos+"%");
//         if(audioPos=="100")
//         {
//             $("#"+ID).removeClass('audioPause').addClass('audioPlay').attr("rel","play");
//             audio.trigger('pause');
//         }
//     });
// });
// });
//counter

var counter = 0;
var add = function(valueToAdd){

  var a = parseInt(document.getElementById("value").innerHTML);
  a += valueToAdd;
  document.getElementById("value").innerHTML = a;
}
function reset(){
  document.getElementById("value").innerHTML=0;  
  }        
    
var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");
addButton.addEventListener("click", function() {
	var ID=$(this).attr("id");
    add(1)
});
resetButton.addEventListener("click", function() {
	var ID=$(this).attr("id");
    reset()
});
/* 
 * Love button for Design it & Code it
 * http://designitcodeit.com/i/9
 */
$('.btn-counter').on('click', function(event, count) {
  event.preventDefault();
  
  var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');
  
  // First method, allows to add custom function
  // Use when you want to do an ajax request
  /* if (multiple) {
  $this.attr('data-count', ++count);
  // Your code here
  } else {
  $this.attr('data-count', active ? --count : ++count).toggleClass('active');
  // Your code here
  } */
  
  // Second method, use when ... I dunno when but it looks cool and that's why it is here
  $.fn.noop = $.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
});


});