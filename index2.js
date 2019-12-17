import proj4 from 'proj4/dist/proj4'
import {get} from 'ol/proj'
import {register} from 'ol/proj/proj4'

import {transform} from 'ol/proj'
import {TransformFunction} from 'ol/proj'

// 참고: https://www.osgeo.kr/17
proj4.defs([
  // ['EPSG:5185', '+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs'],
  // ['EPSG:5186', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs'],
  // ['EPSG:5187', '+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs'],
  // ['EPSG:5188', '+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs']
]);
register(proj4);

var original = [197013.490218964, 451678.787536538]; // 서울적십자병원

// console.log(transform(original, 'EPSG:5185', 'EPSG:4326')) // 124
// console.log(transform(original, 'EPSG:5186', 'EPSG:4326')) // 126
// console.log(transform(original, 'EPSG:5187', 'EPSG:4326')) // 128
// console.log(transform(original, 'EPSG:5188', 'EPSG:4326')) // 130