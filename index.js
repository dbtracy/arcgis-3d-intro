require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/TileLayer"
], function (Map, SceneView, TileLayer) {
  const transportationLayer = new TileLayer({
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
    id: "streets",
    opacity: 0.7
  })
  const housingLayer = new TileLayer({
    url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
    id: "ny-housing"
  })
  const map = new Map({
    basemap: 'oceans',
    layers: [housingLayer]
  })

  map.layers.add(transportationLayer)

  const view = new SceneView({
    container: 'viewDiv',
    map: map
  })
  const streetsLayerToggle = document.getElementById("streetsLayer")

  streetsLayerToggle.addEventListener("change", function () {
    transportationLayer.visible = streetsLayerToggle.checked
  })

  view.on("layerview-create", function (event) {
    if (event.layer.id === "ny-housing") {
      console.log("LayerView for New York housing density created!", event.layerView)
    }
    if (event.layer.id === "streets") {
      console.log("LayerView for streets created!", event.layerView)
    }
  })
  // animation to zoom to chosen layer!
  housingLayer.when(function () {
    setTimeout(() => {
      view.goTo(housingLayer.fullExtent)
    }, 3000);
  })
})
