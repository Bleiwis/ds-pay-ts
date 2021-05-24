import { Drawer } from '@material-ui/core'
import PropTypes from 'prop-types'

interface iDrawerItems {
  items: string
}

const Sidebar = ({ items }: iDrawerItems) => {
  return (
    <div>
      <Drawer>
        { }
      </Drawer>
    </div>
  )
}

Sidebar.propTypes = {
  items: PropTypes.object
}

export default Sidebar
