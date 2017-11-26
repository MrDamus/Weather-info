marker = new google.maps.Marker(
  {
      map:map,
      draggable:true,
      animation: google.maps.Animation.DROP,
      position: results[0].geometry.location
  });
  google.maps.event.addListener(marker, 'dragend', function() 
  {
      geocodePosition(marker.getPosition());
  });
  
  function geocodePosition(pos) 
  {
     geocoder = new google.maps.Geocoder();
     geocoder.geocode
      ({
          latLng: pos
      }, 
          function(results, status) 
          {
              if (status == google.maps.GeocoderStatus.OK) 
              {
                  $("#mapSearchInput").val(results[0].formatted_address);
                  $("#mapErrorMsg").hide(100);
              } 
              else 
              {
                  $("#mapErrorMsg").html('Cannot determine address at this location.'+status).show(100);
              }
          }
      );
  }
// function webServiceTask(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//     .then( response => {
//       if (response.status !== 200) {
//         console.log('Status Code: ' + response.status);
//         reject(response.status)
        
//       } else {
//         response.json().then(data => {
//           resolve(data)
//         });
//       }
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//     reject(err)
//   });
// })
// }

// window.onload = () => {
//   input[0].onkeydown = (e) => {
//     webServiceTask(`api.openweathermap.org/data/2.5/weather?q=Leeds`)
//       .then(data => {
//         }
//         })
//         }
//       )
//       .catch(error => console.log('error'))
//   }
// }