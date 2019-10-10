import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge'

import { ReactComponent as Discount } from './icons/offer.svg'

const Offer = (props) => {
  return (
    <div className="bg-warning-100 br-4 w-100p h-11 flex flex-middle px-4 bs-border">

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
      <p className="fs-body ml-4 c-neutral-700">
        { props.text }
      </p>
      {props.offerUrl.length > 0 &&
        <a href={props.offerUrl} className="ml-2 c-secondary-500 td-none hover:td-underline fs-body">
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
  cta: PropTypes.node
}

Offer.defaultProps = {
  offerUrl: '',
  variant: 'default',
  cta: null
}

export default Offer;