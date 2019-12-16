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
}