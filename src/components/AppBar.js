import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Switch, IconButton, Toolbar, FormControlLabel, Typography, Grid } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  header: {
    textAlign: 'center',
    color: '#ff7900',
    fontWeight: "bold",
    verticalAlign: "baseline",
  },
}))

export default function SearchAppBar (props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar className={classes.header}>
        <FormControlLabel
          control={
            <Switch
              color='secondary'
              checked={props.heatMap}
              onChange={props.handleToggleHeatMap}
            />
          }
          label='Heat Map'
          labelPlacement="end"
        />
        <Grid container justify = "center">
          <Typography variant='h5'>
            US COVID-19 Cases by County
          </Typography>
        </Grid>
        <Typography align='right' style={{ flex: 1 }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={props.toggleDrawer()}
          >
          <MenuIcon />
          </IconButton>
        </Typography>
      </Toolbar>
    </div>
  )
}
