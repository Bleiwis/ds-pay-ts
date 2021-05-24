import { Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'

interface iCard {
  children: any,
  title: string,
}

const MyCard = ({ children, title }: iCard) => {

  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default MyCard
