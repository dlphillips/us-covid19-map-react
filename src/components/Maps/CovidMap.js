import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import dotenv from 'dotenv'
import data from '../../data/data.json'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY
// const minValue = 1
// const minRadius = 2

const CovidMap = props => {
  const { baseMap, onMapMove, lat, lng } = props
  const position = [lat, lng]

  return (
    <Map center={position} zoom={Number(props.zoom)} onMoveend={onMapMove}>
      <TileLayer
        attribution={baseMap.attribution}
        url={baseMap.apiKey ? `${baseMap.url}?apikey=${tfKey}` : baseMap.url}
      />
      <GeoJSON data={data} />
      {/* <GeoJSON data={data} onEachFeature={this.onEachFeaturePoint.bind(this)} pointToLayer={this.pointToLayer.bind(this)} /> */}
    </Map>
  )
}

export default CovidMap
