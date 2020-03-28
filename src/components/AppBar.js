import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
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
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingLeft: '15px'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}))

export default function SearchAppBar (props) {
  const [addressSearch, setAddressSearch] = useState('')

  const noop = () => {}

  const classes = useStyles()

  const handleSearch = event => {
    event.preventDefault()
    props.handleSearch(addressSearch)
  }

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
            React-Leaflet Playground
          </Typography>
          <div className={classes.search}>
            <IconButton
              className={classes.iconButton}
              aria-label='search'
              onClick={handleSearch}
            >
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setAddressSearch(e.target.value)}
              onKeyPress={e => (e.key === 'Enter' ? handleSearch(e) : noop)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
