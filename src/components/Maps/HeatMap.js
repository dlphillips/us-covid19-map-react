import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import dotenv from 'dotenv'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY

const HeatMap = props => {
  const { baseMap, onMapMove, lat, lng, geoData } = props
  const position = [lat, lng]
  const points = geoData.features

  return (
    <div>
      <Map center={position} zoom={Number(props.zoom)} onMoveend={onMapMove}>
        <HeatmapLayer
          points={points}
          longitudeExtractor={m => m.geometry.coordinates[0]}
          latitudeExtractor={m => m.geometry.coordinates[1]}
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
