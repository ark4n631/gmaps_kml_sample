var geocoder   = null;
var geo3parser = null;
var map        = null;
var marker     = null;
var infowindow = null;

function initMap() {
        // Create a map object and specify the DOM element for display.
        geocoder   = new google.maps.Geocoder();
        infowindow = new google.maps.InfoWindow({size: new google.maps.Size(150,50) });
        map        = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.420559, lng: -70.601567},
            scrollwheel: true,
            zoom: 12
        });
        geo3parser = new geoXML3.parser({map: map});
        geo3parser.parse('comunas_santiago.kml');
      }

google.maps.event.addDomListener(window, 'load', initMap);

function showAddress(address) {
    /*
        Take an string to lookup for a geoposition and then compares if it fits inside a poligon in kml file
    */
    var contentString = address+"<br>Outside Area";

    geocoder.geocode({
        'address': address,
        componentRestrictions:{
            country: 'CL'
        }
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var point = results[0].geometry.location;
            contentString += "<br>"+point;
            map.setCenter(point);
            if (marker && marker.setMap) 
                marker.setMap(null);
            marker = new google.maps.Marker({
                map: map, 
                position: point
            });
            map.setZoom(12);
            map.panTo(marker.position);
            for (var i=0; i<geo3parser.docs[0].gpolygons.length; i++) {
                if (geo3parser.docs[0].gpolygons[i].Contains(point)) {
                    contentString = address+"<br>"+geo3parser.docs[0].placemarks[i].name;
                    contentString += "<br>"+point+"<br>polygon#"+i;
                    break;
                }
            }
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(contentString); 
                infowindow.open(map,marker);
            });
            google.maps.event.trigger(marker,"click");
        }
        else{
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}