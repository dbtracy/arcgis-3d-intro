require([
  "esri/tasks/Locator",
  "esri/Map",
  "esri/views/MapView"
], function (Locator, Map, MapView) {
  let locatorTask = new Locator({
    url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
  })
  // Create Map
  let map = new Map({
    basemap: "streets-navigation-vector"
  })

  // Create MapView
  let view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-71.6899, 43.7598],
    zoom: 12
  })
})

view.popup.autoOpenEnabled = false
view.on("click", function (event) {
  // get coordinates of click on the view
  // round decimals to 3 places
  let lat = Math.round(event.mapPoint.latitude * 1000) / 1000
  let lon = Math.round(event.mapPoint.longitude * 1000) / 1000
})

view.popup.open({
  // Set popup's title/location to coordinates of clicked location
  title: `Reverse geocode: [${lon}, ${lat}]`,
  location: event.mapPoint
})
