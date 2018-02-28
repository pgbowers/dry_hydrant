// This is the script for Water For Fires by Peter Bowers.
// Developed for New Germany Volunteer Fire Department, Nova Scotia, Canada, // February 2018

var panorama;
var hydrantMarker;
var marker;

function initMap() {

    // Hydrant and fire station details

    var hdfd = {
        info: '<strong>Hemford & District Fire Station</strong><br>\
					2121 Hwy 208, Hemford<br><br>\<a href="https://goo.gl/maps/cxajHKkN4cx", target = "blank">Get Directions from anywhere</a>',
        lat: 44.507069,
        long: -64.791046,
        icon: 'station40.png'
    };

    var sdfd = {
        info: '<strong>Springfield & District Fire Station</strong><br>\
					986 Hwy 10, Springfield<br><br>\<a href="https://goo.gl/maps/uKTgs4Y2qoE2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.637241,
        long: -64.873736,
        icon: 'station40.png'
    };

    var ndfd = {
        info: '<strong>Northfield District Fire Station</strong><br>\
					2233 Hwy 10, West Northfield<br><br>\<a href="https://goo.gl/maps/PBPnfksGaeL2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.454790,
        long: -64.599583,
        icon: 'station40.png'
    };

    var cdfd = {
        info: '<strong>Cornwall & District Fire Station</strong><br>\
					2588 Cornwall Road<br><br>\<a href="https://goo.gl/maps/AobpJyCGea72", target = "blank">Get Directions from anywhere</a>',
        lat: 44.513713,
        long: -64.540804,
        icon: 'station40.png'
    };

    var wdfd = {
        info: '<strong>Walden & District Fire Station</strong><br>\
					3884 Woodstock Road, Walden<br><br>\<a href="https://goo.gl/maps/1oRagYuEvWU2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.583485,
        long: -64.523537,
        icon: 'station40.png'
    };

    var ngvfd0 = {
        info: '<strong>New Germany Fire Station</strong><br>\
					12 Fire Hall Road, New Germany<br><br>\<a href="https://goo.gl/maps/FqSJ7o1m2a72", target = "blank">Get Directions from anywhere</a>',
        lat: 44.548077,
        long: -64.723489,
        icon: 'station40.png'
    };

    var ngvfd1 = {
        info: '<strong>Kirks Pond</strong><br>\
					120 Copeland Road, New Germany<br><strong>6" Storz Dry Hydrant</strong><br>\<a href="https://goo.gl/maps/8z3TnZUSoh22", target = "blank">Get Directions from anywhere</a>',
        lat: 44.557941,
        long: -64.7314033,
        icon: 'hydrant2.png'
    };
    var ngvfd2 = {
        info: '<strong>Legion Pond</strong><br>\
					55 Varner Road, New Germany<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/kc7ZTpNPjzN2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.548048,
        long: -64.726978,
        icon: 'hydrant2.png'
    };
    var ngvfd3 = {
        info: '<strong>Varner Pond</strong><br>\
					45 Barss Corner Road, New Germany<br><strong>6" Storz Dry Hydrant</strong><br><a href="https://goo.gl/maps/u8XSnAmgjuK2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.545570,
        long: -64.715512,
        icon: 'hydrant2.png'
    };
    var ngvfd4 = {
        info: '<strong>Beeler Pond</strong><br>\
					69 Beeler Road, Elmwood<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/A1dFvZzomTv", target = "blank">Get Directions from anywhere</a>',
        lat: 44.580931,
        long: -64.625166,
        icon: 'hydrant2.png'
    };
    var ngvfd5 = {
        info: '<strong>Charlie Hill Road Pond</strong><br>\
					714 Farmington Road, Farmington<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/FEMP8uuA1w82", target = "blank">Get Directions from anywhere</a>',
        lat: 44.613036,
        long: -64.665001,
        icon: 'hydrant2.png'
    };
    var ngvfd6 = {
        info: '<strong>New Canada Lake</strong><br>\
					2919 Lower Branch Road, New Canada<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/iJyJyRnyexm", target = "blank">Get Directions from anywhere</a>',
        lat: 44.485180,
        long: -64.691420,
        icon: 'hydrant2.png'
    };
    var ngvfd7 = {
        info: '<strong>Allen Veinot Pond</strong><br>\
					2575 Barss Corner Road, Maplewood<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/cqWicYEA38B2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.622314,
        long: -64.625892,
        icon: 'hydrant2.png'
    };
    var ngvfd8 = {
        info: '<strong>Snyder Pond</strong><br>\
					29 School Street, New Germany<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/xLKPwztbA6T2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.539064,
        long: -64.720499,
        icon: 'hydrant2.png'
    };
    var ngvfd9 = {
        info: '<strong>Allen Demone Pond</strong><br>\
					1303 North River Road, North River<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/69PeRYBqXfs", target = "blank">Get Directions from anywhere</a>',
        lat: 44.633282,
        long: -64.798204,
        icon: 'hydrant2.png'
    };
    var ngvfd10 = {
        info: '<strong>Slauenwhite Pond</strong><br>\
					919 Stanburne Road, Stanburne<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/CyZjsufDeS12", target = "blank">Get Directions from anywhere</a>',
        lat: 44.604180,
        long: -64.720438,
        icon: 'hydrant2.png'
    };
    var ngvfd11 = {
        info: '<strong>George Joudrey Pond</strong><br>\
					1080 Barss Corner Road, Barss Corner<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/hKwZVCCyRnz", target = "blank">Get Directions from anywhere</a>',
        lat: 44.575696,
        long: -64.676465,
        icon: 'hydrant2.png'
    };
    var ngvfd12 = {
        info: '<strong>Waldo Morton Pond</strong><br>\
					4454 Northfield Road, Watford<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/3JW1t1vYPkL2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.535493,
        long: -64.663751,
        icon: 'hydrant2.png'
    };
    var ngvfd13 = {
        info: '<strong>Osborne Road Pond</strong><br>\
					1075 Osborne Road, New Germany<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/6EZuYrbdU2p", target = "blank">Get Directions from anywhere</a>',
        lat: 44.527103,
        long: -64.705672,
        icon: 'hydrant2.png'
    };
    var ngvfd14 = {
        info: '<strong>Berle Deal Pond</strong><br>\
					119 North River Road, North River<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/UwrSFXWRtHH2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.598890,
        long: -64.763453,
        icon: 'hydrant2.png'
    };
    var ngvfd15 = {
        info: '<strong>Ivan Veinotte Pond</strong><br>\
					4018 Hwy 10, Pinehurst<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/YDRDEDJ2ADM2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.511225,
        long: -64.670354,
        icon: 'hydrant2.png'
    };
    var ngvfd16 = {
        info: '<strong>Russel Ramey Pond</strong><br>\
					4700 Cornwall Road, Union Square<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/xjpyBdF9Bqm", target = "blank">Get Directions from anywhere</a>',
        lat: 44.562873,
        long: -64.641983,
        icon: 'hydrant2.png'
    };
    var ngvfd17 = {
        info: '<strong>Willard Wagner Pond</strong><br>\
					173 Farmington Road, Farmington<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/otReYi58YUm", target = "blank">Get Directions from anywhere</a>',
        lat: 44.591009,
        long: -64.667366,
        icon: 'hydrant2.png'
    };
    var ngvfd18 = {
        info: '<strong>High Landing Road Pond</strong><br>\
					1115 High Landing Road, Sherbrooke Lake<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/VYXuFmEkEuN2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.661600,
        long: -64.615574,
        icon: 'hydrant2.png'
    };
    var ngvfd19 = {
        info: '<strong>Jimmy DeLong Pond</strong><br>\
					538 Barss Corner Road, Barss Corner<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/GLLVvpu2X6G2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.556648,
        long: -64.689477,
        icon: 'hydrant2.png'
    };
    var ngvfd20 = {
        info: '<strong>Gary Seamone Pond</strong><br>\
					141 Old Barss Corner Road, Barss Corner<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/caK9mXZFB6w", target = "blank">Get Directions from anywhere</a>',
        lat: 44.556857,
        long: -64.697654,
        icon: 'hydrant2.png'
    };
    var ngvfd21 = {
        info: '<strong>FreshMart Pond</strong><br>\
					4992 Hwy 10, New Germany, Maplewood<br><strong>6" Storz Dry Hydrant</strong><br>\
					<a href="https://goo.gl/maps/cqWicYEA38B2", target = "blank">Get Directions from anywhere</a>',
        lat: 44.540112,
        long: -64.713620,
        icon: 'hydrant2.png'
    };

    var locations = [
      [hdfd.info, hdfd.lat, hdfd.long, hdfd.icon, 0],
      [sdfd.info, sdfd.lat, sdfd.long, sdfd.icon, 1],
      [ndfd.info, ndfd.lat, ndfd.long, ndfd.icon, 2],
      [cdfd.info, cdfd.lat, cdfd.long, cdfd.icon, 3],
      [wdfd.info, wdfd.lat, wdfd.long, wdfd.icon, 4],
      [ngvfd1.info, ngvfd1.lat, ngvfd1.long, ngvfd1.icon, 5],
      [ngvfd2.info, ngvfd2.lat, ngvfd2.long, ngvfd2.icon, 6],
      [ngvfd3.info, ngvfd3.lat, ngvfd3.long, ngvfd3.icon, 7],
      [ngvfd4.info, ngvfd4.lat, ngvfd4.long, ngvfd4.icon, 8],
      [ngvfd5.info, ngvfd5.lat, ngvfd5.long, ngvfd5.icon, 9],
      [ngvfd6.info, ngvfd6.lat, ngvfd6.long, ngvfd6.icon, 10],
      [ngvfd0.info, ngvfd0.lat, ngvfd0.long, ngvfd0.icon, 11],
      [ngvfd7.info, ngvfd7.lat, ngvfd7.long, ngvfd7.icon, 12],
      [ngvfd8.info, ngvfd8.lat, ngvfd8.long, ngvfd8.icon, 13],
      [ngvfd9.info, ngvfd9.lat, ngvfd9.long, ngvfd9.icon, 14],
      [ngvfd10.info, ngvfd10.lat, ngvfd10.long, ngvfd10.icon, 15],
      [ngvfd11.info, ngvfd11.lat, ngvfd11.long, ngvfd11.icon, 16],
      [ngvfd12.info, ngvfd12.lat, ngvfd12.long, ngvfd12.icon, 17],
      [ngvfd13.info, ngvfd13.lat, ngvfd13.long, ngvfd13.icon, 18], [ngvfd14.info, ngvfd14.lat, ngvfd14.long, ngvfd14.icon, 19], [ngvfd15.info, ngvfd15.lat, ngvfd15.long, ngvfd15.icon, 20], [ngvfd16.info, ngvfd16.lat, ngvfd16.long, ngvfd16.icon, 21], [ngvfd17.info, ngvfd17.lat, ngvfd17.long, ngvfd17.icon, 22], [ngvfd18.info, ngvfd18.lat, ngvfd18.long, ngvfd18.icon, 23], [ngvfd19.info, ngvfd19.lat, ngvfd19.long, ngvfd19.icon, 24], [ngvfd20.info, ngvfd20.lat, ngvfd20.long, ngvfd20.icon, 25], [ngvfd21.info, ngvfd21.lat, ngvfd21.long, ngvfd21.icon, 26],


    ];

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    // parameters for the map object
    var mapOptions = {
        streetViewControl: false,
        zoom: 11,
        center: {
            lat: 44.548077,
            lng: -64.723489
        },

        // this moves the Map and Satellite buttons
        mapTypeControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT
        }
    };

    // set up the Street View code
    var sv = new google.maps.StreetViewService();
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
        enableCloseButton: true
    });

    // create a new map object
    var map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
    directionsDisplay.setMap(map);

    // this will remove Google's A and B markers from the route
    directionsDisplay.setOptions({
        suppressMarkers: true
    });

    // set up an infowindow for the hydrants
    var infowindow = new google.maps.InfoWindow({});
    var hereIs;
    var myDistance;

    // listen for a click on the close button of the street view
    google.maps.event.addListener(panorama, 'closeclick', function () {
        // hide the street view div
        document.getElementById('pano').style.display = 'none';
        // display the map again
        document.getElementById('mapDiv').style.display = 'flex';
    });

    // put a marker on the map for each dry hydrant
    for (var i = 0; i < locations.length; i++) {
        hydrantMarker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            // use a custom map icon to show different water source types
            icon: locations[i][3],
            map: map
        });

        // listen for a click on a marker then display the infowindow
        hydrantMarker.addListener('click', (function (hydrantMarker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, hydrantMarker);
                // get the position of the selected hydrant
                hereIs = {
                    lat: locations[i][1],
                    lng: locations[i][2]
                };
            }
        })(hydrantMarker, i));

        // this displays the route as soon as a dry hydrant is selected
        hydrantMarker.addListener('click', calcRoute);
    }

    // display the distance at the bottom center of the map
    var dist = document.getElementById("dist");
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(dist);

    function calcRoute() {

        // starting point is the scene of the emergency
        var start = document.getElementById('emergLoc-input').value;

        console.log("Start is: ", start);

        var request = {
            origin: start,
            destination: hereIs,
            travelMode: 'DRIVING'
        };

        console.log("End is: ", hereIs);

        directionsService.route(request, function (result, status) {

                console.log("Status is:", status);

                if (status == 'OK') {
                    directionsDisplay.setDirections(result);

                    // display the driving distance, rounded to two places of decimal
                    myDistance = Math.round((result.routes[0].legs[0].distance.value / 1000) * 100) / 100;

                    dist.textContent = "Driving Distance is: " + myDistance + " km";
                }

                if (status === 'NOT_FOUND'){
                    alert('No route!');
                }

              });

        }

        // Create the autocomplete box and link it to the UI element.
        var input = document.getElementById('emergLoc-input');

        // autocomplete will only look for places in the current map view
        var options = {
            types: ['geocode'],

            // this set the bounds too close
            //strictBounds: true
        }
        var autocomplete;
        var autocompleteListener;

        autocomplete = new google.maps.places.Autocomplete(input, options);

        // put the autocomplete box at the top center of the map
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

        // create a marker for the emergency location
        marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        var initAutoComplete = function () {

            // restrict suggestions to the current map
            autocomplete.bindTo('bounds', map);
            autocompleteListener = google.maps.event.addDomListener(autocomplete, 'place_changed', onPlaceChange);
        };

        var onPlaceChange = function () {

            // close the hydrant infowindow once a new choice has been made
            infowindow.close();

            // erase the distance field once a new choice has been made
            dist.textContent = "";

            // clear the old route
            directionsDisplay.set('directions', null);

            var place = autocomplete.getPlace();

            if (!place.geometry) {
                window.alert("I can't find that place!");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
                map.setZoom(13);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(13);
            }
            // set a marker at the scene of the emergency
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
        };

        // get a street view when the marker is clicked
        marker.addListener('click', function (event) {

            document.getElementById('mapDiv').style.display = 'none';
            document.getElementById('pano').style.display = 'flex';

            // this is the StreetViewPanoramaData object only
            sv.getPanorama({
                location: event.latLng,
                radius: 50
            }, processSVData);
        });

        google.maps.event.removeListener(autocompleteListener);

        initAutoComplete();

        function processSVData(data, status) {

            // is there a Street View for this address?
            if (status === google.maps.StreetViewStatus.OK) {

                // set the StreetView object to display in the pano div
                panorama.setPano(data.location.pano);
                panorama.setPov({
                    heading: 180,
                    pitch: 0,
                });
                // make the panorama visible
                panorama.setVisible(true);

                // hide the map and display the street view
                document.getElementById('mapDiv').style.display = 'none';
                document.getElementById('pano').style.display = 'flex';

                //  if there is no street view for the address
            } else {
                document.getElementById('pano').style.display = 'none';
                document.getElementById('mapDiv').style.display = 'flex';
                alert("No street view for that address");
            }
        }
    }
