import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Badge from '../Badge'

import { ReactComponent as Discount } from './icons/offer.svg'

const Offer = (props) => {

  const { children, className, size, ...additionalProps} = props
  const wrapperClass = classnames({
    'p-3': size === 'lg',
    'h-11': size === 'lg',
    'h-9': size === 'md',
    'py-1': size === 'md',
    'px-2': size === 'md',
    'h-7': size === 'md',
    'h-4': size === 'sm'
  },
    'br-4',
    'flex',
    'flex-middle',
    'bg-warning-100',
    'w-100p',
    'bs-border',
    className
  )

  const paraClass = classnames({
    'fs-3': size === 'lg' || size === 'md' ,
    'ml-4': size === 'lg',
    'ml-2': size === 'md',
    'fs-2': size === 'sm',
    'ml-1': size === 'sm'
  },
    'c-neutral-700'
  )

  const linkClass = classnames({
    'fs-3': size === 'lg',
    'ml-2': size === 'lg',
    'fs-2': size === 'md',
    'ml-1': size === 'md',
    'fs-1': size === 'sm',
    'ml-0': size === 'sm'
  },
    'c-secondary-500',
    'td-none',
    'hover:td-underline'
  )


  return (
    <div className={wrapperClass}>

    {props.variant === 'default' &&
      <Badge type="warning">
          Offer
      </Badge>
    }

    {props.variant === 'mega' &&
        <div className="bg-warning-500 h-11 nml-4 blr-4 flex flex-middle px-3">
          <Discount width="20px" className="c-white mr-2" />
          <p className="m-0 tt-uppercase fw-600 fs-3 c-white">
            Save big
        </p>
        </div>
    }

      <div className="flex-1 flex flex-middle">
      <p className={paraClass}>
        { props.text }
      </p>
      {props.offerUrl.length > 0 &&
        <a href={props.offerUrl} className={linkClass}>
          Know more
        </a>
      }
      </div>
      <div>
          { props.cta }
      </div>
    </div>
  );
}

Offer.propTypes = {
  text: PropTypes.string.isRequired,
  offerUrl: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'mega']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  cta: PropTypes.node
}

Offer.defaultProps = {
  offerUrl: '',
  variant: 'default',
  size: 'md',
  cta: null
}

export default Offer;