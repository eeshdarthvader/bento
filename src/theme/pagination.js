import React from 'react';
import { Link } from 'gatsby'
import classNames from 'classnames'

import {
  Spacer,
  Divider
} from '@lib'

const Pagination = (props) => {
  const { docName, menus } = props;

  let arrangedMenus = Object.values(menus)
  arrangedMenus = Array.prototype.concat.apply([], arrangedMenus);
  
  const currentPage = arrangedMenus.findIndex(menuItem => menuItem.name === docName)

  const isLast = currentPage === arrangedMenus.length - 1
  const isFirst = currentPage === 0

  const prevPage = arrangedMenus[currentPage - 1]
  const nextPage = arrangedMenus[currentPage + 1]

  const linkClass = classNames(
    'td-none',
    'c-pointer',
    'c-neutral-500',
    'fs-body',
    'hover:c-secondary-500',
    'fw-500'
  )

  return (
    <>
    <Spacer my={15} py={15}/>
    <Divider />

    <div className='flex flex-between py-9'>
        <div className="flex-1">
            {!isFirst &&
              <Link
                className={linkClass}
                to={prevPage.route}
              >
                <span className="pr-2">←</span>Back to: {prevPage.name}
              </Link>
            }
        </div>
        <div className="flex-1 ta-right">
        {!isLast &&
          <Link
            className={linkClass}
            to={nextPage.route}
          >
            See next: {nextPage.name}<span className="pl-2">→</span>
          </Link>
        }
        </div>
    </div>
    </>
  );
}

export default Pagination;