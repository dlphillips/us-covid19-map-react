import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
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
  }
}))

export default function SearchAppBar (props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
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
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color='secondary'
                  checked={props.heatMap}
                  onChange={props.handleToggleHeatMap}
                />
              }
              label='Heat Map'
            />
          </FormGroup>
          <Typography className={classes.title} variant='h6' noWrap>
            US COVID-19 Cases by County
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
