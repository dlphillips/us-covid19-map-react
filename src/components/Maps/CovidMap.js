import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import dotenv from 'dotenv'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY
const minValue = 1
const minRadius = 1

const onEachFeaturePoint = (feature, layer) => {
  if (feature.properties && feature.properties.Combined_Key) {
    const popup = `<h3> ${feature.properties.Combined_Key}</h3>
    <table>
      <tbody>
        <tr>
          <td>Cases </td>
          <td>${feature.properties.Confirmed}</td>
        </tr>
        <tr>
          <td>Deaths</td>
          <td>${feature.properties.Deaths}</td>
        </tr>
        <tr>
          <td>Recovered </td>
          <td>${feature.properties.Recovered}</td>
        </tr>
          <tr>
          <td>
            <h3>
              <a href='https://www.google.com/search?q=${feature.properties.Combined_Key} covid-19' target='_blank'> Latest News </a>
            </h3>
          </td>
        </tr>
      </tbody>
    </table>`

    layer.bindPopup(popup, { closeButton: false, offset: L.point(0, -20) })
  }
}

const pointToLayer = (feature, ll) => {
  return L.circleMarker(ll, {
    color: '#ff7900',
    opacity: .9,
    weight: 2,
    fillColor: '#ff7900',
    fillOpacity: .8,
    radius: calcRadius(feature.properties.Confirmed)
  })
}

const calcRadius = val =>
  1.0083 * Math.pow(val / minValue, .30) * minRadius

const CovidMap = props => {
  const { baseMap, onMapMove, lat, lng, zoom, geoData } = props
  const position = [lat, lng]

  return (
    <Map center={position} zoom={Number(zoom)} onMoveend={onMapMove}>
      <TileLayer
        attribution={baseMap.attribution}
        url={baseMap.apiKey ? `${baseMap.url}?apikey=${tfKey}` : baseMap.url}
      />
      <GeoJSON data={geoData} onEachFeature={onEachFeaturePoint} pointToLayer={pointToLayer} />
    </Map>
  )
}

export default CovidMap
