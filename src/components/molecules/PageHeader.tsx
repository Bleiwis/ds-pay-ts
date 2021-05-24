import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

interface iHelmet {
  title: string,
  children: Node
}

const PageHeader = ({ title, children }: iHelmet) => {
  return (
    <div>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{`${title} | DS-PAY `}</title>
        <link rel='icon' href='/logo-40.png' />
        <meta name='description' content='DS-PAY, tu pasarela de pago' />
        <meta name='keywords' content='Colombia, pasarela de pago, pagos en linea, pagos rápidos, ds-pay, dspay' />
        <meta name='author' content='Digital Security Group' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Helmet>
      {children}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PageHeader
