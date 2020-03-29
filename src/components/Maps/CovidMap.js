import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import dotenv from 'dotenv'

dotenv.config()
const tfKey = process.env.REACT_APP_THUNDERFOREST_KEY

const CovidMap = props => {
  const { baseMap, onMapMove, lat, lng } = props
  const position = [lat, lng]

  return (
    <Map center={position} zoom={Number(props.zoom)} onMoveend={onMapMove}>
      <TileLayer
        attribution={baseMap.attribution}
        url={baseMap.apiKey ? `${baseMap.url}?apikey=${tfKey}` : baseMap.url}
      />
    </Map>
  )
}

export default CovidMap
