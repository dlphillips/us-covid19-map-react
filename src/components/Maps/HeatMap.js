import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import data from '../../data/data.json'
import dotenv from 'dotenv'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY
const points = data.features

const HeatMap = props => {
  const { baseMap, onMapMove, lat, lng } = props
  const position = [lat, lng]

  return (
    <div>
      <Map center={position} zoom={Number(props.zoom)} onMoveend={onMapMove}>
        <HeatmapLayer
          points={points}
          longitudeExtractor={m => m.properties.Long_}
          latitudeExtractor={m => m.properties.Lat}
          intensityExtractor={m => m.properties.Confirmed}
        />
        <TileLayer
          attribution={baseMap.attribution}
          url={baseMap.apiKey ? `${baseMap.url}?apikey=${tfKey}` : baseMap.url}
        />
      </Map>
    </div>
  )
}

export default HeatMap
