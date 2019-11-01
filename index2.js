import "ol/ol.css";
import "ol-layerswitcher/src/ol-layerswitcher.css";
import "ol-layerswitcher/src/ol-layerswitcher.js";

import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";

import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Style, Stroke, Circle, Fill} from 'ol/style';

import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import LayerGroup from 'ol/layer/Group';

import {DragAndDrop, Modify, Draw, Snap} from 'ol/interaction';
import LinearRing from 'ol/geom/LinearRing';
import {Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon} from 'ol/geom';
  
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

// var overlayLayer2 = new LayerGroup({
//     title: 'Census',
//     fold: 'open',
//     layers: [
//         new VectorLayer({
//             title: 'Population of Seoul',
//             format: new GeoJSON(),
//             url: '/data/population_seoul.geojson'
//         }),
//         new VectorLayer({
//             title: 'Sido info',
//             format: new GeoJSON(),
//             url: '/data/sido.geojson'
//         })
//     ]
// })

const map = new Map({
  target: "map",
  layers: [
      new LayerGroup({
          'title': 'Base maps',
          layers: [baseLayer1, baseLayer2, baseLayer3]
      }),
      new LayerGroup({
          'title': 'Overlays',
          fold: 'open',
          layers: [overlayLayer1, overlayLayer2]
      })
  ],
  view: new View({
    center: fromLonLat([127, 37.55]),
    zoom: 12
  })
});

var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabl: 'Légende',
    groupSelectStyle: 'children'
})
map.addControl(layerSwitcher)