import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";

import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Style, Stroke, Circle, Fill} from 'ol/style';

import Stamen from 'ol/source/Stamen.js';
import LayerGroup from 'ol/layer/Group';

import {DragAndDrop, Modify, Draw, Snap} from 'ol/interaction';
import LinearRing from 'ol/geom/LinearRing';
import {Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon} from 'ol/geom';



var watercolor = new TileLayer({
  source: new Stamen({
    layer: 'watercolor'
  })
});

var labels = new TileLayer({
  source: new Stamen({
    layer: 'terrain-labels'
  })
});

var stamen = new LayerGroup({ layers: [watercolor, labels]})

const map = new Map({
  target: "map",
  view: new View({
    center: fromLonLat([127, 37.58]),
    zoom: 12
  })
});

map.addLayer(stamen);

// 드래그앤드롭 시작
var dndSource = new VectorSource();
var dndLayer = new VectorLayer({
  source: dndSource
})

var dNd = new DragAndDrop({
  // source: source,
  formatConstructors: [GeoJSON]
});

map.addInteraction(dNd);

map.addLayer(dndLayer);

dNd.on('addfeatures', function(event) {
  dndSource.addFeatures(event.features);
})
// 드래그앤드롭 끝

// 드로우 시작
var drawSource = new VectorSource();
var drawLayer = new VectorLayer({
  source: drawSource
});
map.addLayer(drawLayer);

document.getElementById("fnDraw").onclick = function() {

  var modify = new Modify({ source: drawSource });
  map.addInteraction(modify);

  var draw = new Draw({
    source: drawSource,
    type: 'Point'
  });
  map.addInteraction(draw);
  
}
// 드로우 끝

// 다운로드 시작
document.getElementById("fnDownload").onclick = function() {
  const format = new GeoJSON({featureProjection: "EPSG:3857"});
  const download = document.getElementById("fnDownload");

  var downloadSource = new VectorSource();
  downloadSource.addFeatures(dndSource.getFeatures());
  downloadSource.addFeatures(drawSource.getFeatures());

  const features = downloadSource.getFeatures();
  const json = format.writeFeatures(features);
  download.href = "data:text/json;charset=utf-8, " + json;
}
// 다운로드 끝

// 버퍼 시작
document.getElementById("fnBuffer").onclick = function() {
  var allSource = new VectorSource();
  allSource.addFeatures(dndSource.getFeatures());
  allSource.addFeatures(drawSource.getFeatures());
  var features = allSource.getFeatures();
  var parser = new jsts.io.OL3Parser();
  parser.inject(Point, LineString, LinearRing, Polygon, MultiPoint, MultiLineString, MultiPolygon);

  for (var i = 0; i < features.length; i++) {
    var feature = features[i];
    // convert the OpenLayers geometry to a JSTS geometry
    var jstsGeom = parser.read(feature.getGeometry());

    // create a buffer of 40 meters around each line
    var buffered = jstsGeom.buffer(400);

    // convert back from JSTS and replace the geometry on the feature
    feature.setGeometry(parser.write(buffered));
  }

  allSource.addFeature(features);

  var vectorLayer = new VectorLayer({
    source: source
  })
  map.add(vectorLayer);
}
// 버퍼 끝

/*브이월드에서 제공되는 좌표계는
- WGS84 경위도 : EPSG:4326

- GRS80 경위도 : EPSG:4019

- Google Mercator : EPSG:900913

- 서부원점(GRS80) : EPSG:5180, EPSG:5185

- 중부원점(GRS80) : EPSG:5181

- 제주원점(GRS80) : EPSG:5182, EPSG:5186

- 동부원점(GRS80) : EPSG:5183, EPSG:5187

- 동해(울릉)원점(GRS80) : EPSG:5184, EPSG:5188

- UTM-K (GRS80) : EPSG:5179*/