import PropTypes from 'prop-types'
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

interface iLayout {
  children: any
}

const AuthLayout = ({ children }: iLayout) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* aqui van las barras de navegacion */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any
}

export default AuthLayout
