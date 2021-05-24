import { AppBar, Toolbar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

interface iAppbar {
  children: Node
}

const Navbar = ({ children }: iAppbar) => {
  return (
    <div>
      <AppBar color="primary" >
        <Toolbar>

        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node
}

export default Navbar
