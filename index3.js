import "ol";
// import "shpjs";
// import './dist/library/shp.js';

import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";

import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

var tileLayer = new TileLayer({
    source: new OSM()
});

const map = new Map({
    target: "map",
    layers: [tileLayer],
    view: new View({
      center: fromLonLat([127, 37.58]),
      zoom: 5
    })
  });

  var source = new VectorSource();

  var vectorLayer = new VectorLayer({
      source: source
    });
    
  map.addLayer(vectorLayer);


shp('./data/CTPRVN_201905 (2).zip').then(function(geojson) {
    var feature = new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(geojson);
    source.addFeatures(feature);
})