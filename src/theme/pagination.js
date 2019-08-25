import React from 'react';
import { useMenus } from 'docz'
import { Link } from 'gatsby'
import classNames from 'classnames'

import {
  Spacer,
  Divider
} from '@lib'

const Pagination = (props) => {
  const { docName, category } = props;
  const allMenus = useMenus()



  // Get only category menus
  const menu = allMenus.filter(menu => {
    return menu.name === category
  })

  const menuItems = menu[0].menu

  const currentPage = menuItems.findIndex(menuItem => menuItem.name === docName)

  const isLast = currentPage === menuItems.length - 1
  const isFirst = currentPage === 0

  const prevPage = menuItems[currentPage - 1]
  const nextPage = menuItems[currentPage + 1]

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
    <Spacer my={8} />
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