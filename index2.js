import "ol/ol.css";
import "ol-layerswitcher/src/ol-layerswitcher.css";
import "ol-layerswitcher/src/ol-layerswitcher.js";

import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";

import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import LayerGroup from 'ol/layer/Group';

import proj4 from 'proj4/dist/proj4'
// import {register} from 'ol/proj/proj4'
  
  var baseLayer1 = new LayerGroup({
      title: 'Water color with labels',
      type: 'base',
      combine: true,
      visible: false,
      layers: [
        new TileLayer({
            source: new Stamen({
              layer: 'watercolor'
            })
          }),
          new TileLayer({
            source: new Stamen({
              layer: 'watercolor'
            })
          })
      ]
});

var baseLayer2 = new TileLayer({
    title: 'Water color',
    type: 'base',
    visible: false,
    source: new Stamen({
        layer: 'watercolor'
    })
});

var baseLayer3 = new TileLayer({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new OSM()
})

var overlayLayer1 = new VectorLayer({
    title: 'roads-seoul',
    visible: false,
    source: new VectorSource({
        format: new GeoJSON(),
        url: '/data/roads-seoul.geojson'
    })
})

var overlayLayer2 = new VectorLayer({
    title: 'census-seoul',
    source: new VectorSource({
        format: new GeoJSON(),
        url: '/data/population_seoul.geojson'
    })
})

const map = new Map({
  target: "map",
  layers: [
      new LayerGroup({
          'title': 'Base maps',
          // layers: [baseLayer1, baseLayer2, baseLayer3]
          layers: [baseLayer3]
      }),
      // new LayerGroup({
      //     'title': 'Overlays',
      //     fold: 'open',
      //     layers: [overlayLayer1, overlayLayer2]
      // })
  ],
  view: new View({
    center: fromLonLat([127, 37.55]),
    zoom: 12
  })
});

var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabl: 'Légende',
    groupSelectStyle: 'children'
});
layerSwitcher.hidePanel();
map.addControl(layerSwitcher);

document.getElementById("fnAddLayer").onclick = function() {
  var title = prompt("레이어 이름을 입력하세요.");
  var s = document.getElementById("layerData");
  var datafileName = s.options[s.selectedIndex].value;

  if(title) {
    var userLayer = new VectorLayer({
      title: title,
      source: new VectorSource({
        // 임의로 고름
        format: new GeoJSON(),
        url: `/data/${datafileName}.geojson`
      })
    });
    map.addLayer(userLayer);
  }

  // 레이어 목록 만들기
  var layerList = document.getElementById("layerList");
  var newList = document.createElement("li")

  var newChkbox = document.createElement("input");
  newChkbox.setAttribute("type", "checkbox");
  newChkbox.setAttribute("checked", "true");
  var listText = document.createTextNode(title);
  
  // newChkbox.append(listText);
  newList.appendChild(newChkbox);
  newList.appendChild(listText);

  var btnDelete = document.createElement("button")
  var btnText = document.createTextNode("x");
  btnDelete.appendChild(btnText);
  newList.append(btnDelete);

  layerList.appendChild(newList);
}

document.getElementById("fnTransform").onclick = function () {
  console.log('clicked');
  // console.log(proj4.defs('EPSG:4326'));
  var firstProjection = 'PROJCS["NAD83 / Massachusetts Mainland",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",42.68333333333333],PARAMETER["standard_parallel_2",41.71666666666667],PARAMETER["latitude_of_origin",41],PARAMETER["central_meridian",-71.5],PARAMETER["false_easting",200000],PARAMETER["false_northing",750000],AUTHORITY["EPSG","26986"],AXIS["X",EAST],AXIS["Y",NORTH]]';
  var secondProjection = "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";

  console.log(proj4(firstProjection,secondProjection,[2,5]));

}