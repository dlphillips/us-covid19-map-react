import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import { addressPoints } from './realworld.10000'

import dotenv from 'dotenv'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY

const HeatMap = props => {
  const { baseMap, onMapMove, lat, lng } = props
  const position = [lat, lng]

  return (
    <div>
      <Map center={position} zoom={Number(props.zoom)} onMoveend={onMapMove}>
        <HeatmapLayer
          points={addressPoints}
          longitudeExtractor={m => m[1]}
          latitudeExtractor={m => m[0]}
          intensityExtractor={m => parseFloat(m[2])}
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
