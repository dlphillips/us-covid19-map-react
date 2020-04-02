import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Switch, Slider, Grid, Paper, Typography } from '@material-ui/core/'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#ff7900',
    fontWeight: "bold",
    backgroundColor: '#fff',
    verticalAlign: "baseline",
    marginBottom: "10px"
  },
}))

const PrettoSlider = withStyles({
  root: {
    color: '#ff7900',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const valuetext = value => {
  console.log('value: ', value);
  return `${value}`;
}

export default function SearchAppBar (props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={props.toggleDrawer()}
          >
          <MenuIcon />
          </IconButton>
          <h2>
            US COVID-19 Cases by County
          </h2>
        </Toolbar>
      </Paper>
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              getAriaValueText={valuetext}
              step={1}
              min={1}
              max={10}
            />
            <Typography gutterBottom>
              Radius Size (in process)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <FormControlLabel
            control={
              <Switch
                color='#fff'
                checked={props.heatMap}
                onChange={props.handleToggleHeatMap}
              />
            }
            label='Heat Map'
          />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            Date Select Placeholder
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
