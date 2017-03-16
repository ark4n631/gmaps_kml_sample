# Google Maps Sample Integration with local KML File

## Description:

This is a sample app, that implements google maps API, with a local sample KML file search and address and verify if the address is inside some poligon of the KML, the sample i used it is from the city of Santiago, given any address will determine wich "comuna"/district the address belongs to. But the idea can be used to any porpuse this is just a tiny example achieved in a couple of hours of research. 

Take note that i had the requeriment that the KML has to be locally in the app, you could achieve the same just using google maps API also.

## Requirements:
* [NodeJS](https://nodejs.org/)
* [Bower](https://bower.io/)
* [Gulp](http://gulpjs.com/)

## Install

How to install, easy just install nodejs npm if you use ubuntu if not [install-guide](https://nodejs.org/en/download/package-manager/):

```BASH
$ sudo apt-get install nodejs npm
$ npm install -g bower
$ npm install -g grunt-cli
```

Clone the repo:
```BASH
$ mkdir Dev
Dev/$ git clone https://github.com/ark4n631/linktorepo
Dev/$ cd gmaps_kml_sample
Dev/gmaps_kml_sample/$ npm install
Dev/gmaps_kml_sample/$ bower install
```

Run the app:

```BASH
Dev/gmaps_kml_sample/$ grunt serve
```


## External Links

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [geoxml3](https://github.com/geocodezip/geoxml3)
* [geoxml3 sample](http://www.geocodezip.com/geoxml3_test/v3_collection-map2e.html)
* [epoly-v3](https://github.com/drecchia/epoly-v3-bower)