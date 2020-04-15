import React, { useState } from 'react'
import '../App.css'
import Grid from '@material-ui/core/Grid'
import AppBar from './AppBar.js'
import { makeStyles } from '@material-ui/core/styles'
import CovidMap from './Maps/CovidMap.js'
import HeatMap from './Maps/HeatMap.js'
import BaseMapSelectDrawer from './BaseMapSelectDrawer.js'
import * as tileLayers from './Maps/tileLayers.json'
import data from '../data/04-14-2020.json'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#282c34'
    }
  },
  root: {
    flexGrow: 1,
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  containerClasses: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}))

const Dashboard = () => {
  const [lng, setLng] = useState(-96.967784)
  const [lat, setLat] = useState(38.119880)
  const [zoom, setZoom] = useState(4)
  const [drawerState, setDrawerState] = React.useState(false)
  const [baseMap, setBaseMap] = useState('CartoDB DarkMatter')
  const [heatMap, setHeatMap] = useState(false)

  const classes = useStyles()

  const getBaseLayer = baseMap => {
    setBaseMap(baseMap)
  }

  const getBaseMapObject = baseMap => {
    const baseMapObj = tileLayers.layers.find(o => o.name === baseMap)
    return baseMapObj
  }

  const toggleHeatMap = () => {
    setHeatMap(prev => !prev)
  }

  const handleMapMove = e => {
    const newZoom = e.target.getZoom()
    const { lng, lat } = e.target.getCenter()

    setZoom(newZoom)
    setLng(lng)
    setLat(lat)
  }

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerState(!drawerState)
  }
    
  return (
    <div className='App'>
      <div className={classes.root}>
        <BaseMapSelectDrawer
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
          getBaseLayer={getBaseLayer}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <AppBar
              drawerState={drawerState}
              toggleDrawer={toggleDrawer}
              handleToggleHeatMap={toggleHeatMap}
              heatMap={heatMap}
              updated={data.features[0].properties.Last_Update}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {!heatMap && (
              <CovidMap
                lat={lat}
                lng={lng}
                zoom={zoom}
                baseMap={getBaseMapObject(baseMap)}
                onMapMove={handleMapMove}
                geoData={data}
              />
            )}
            {heatMap && (
              <HeatMap
                lat={lat}
                lng={lng}
                zoom={zoom}
                baseMap={getBaseMapObject(baseMap)}
                onMapMove={handleMapMove}
                geoData={data}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard
