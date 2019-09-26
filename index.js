require(["esri/Map", "esri/views/SceneView"], function (Map, SceneView) {
  const map = new Map({
    basemap: 'streets',
    ground: 'world-elevation'
  })
  const view = new SceneView({
    container: 'viewDiv',
    map: map
  })
})
