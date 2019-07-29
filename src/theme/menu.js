import React from 'react';
import { useMenus } from 'docz'
import { Link } from 'gatsby'
import classnames from 'classnames'

const Menu = ({category, doc}) => {
  const allMenus = useMenus()
  // Get only category menus
  const menu = allMenus.filter(menu => {
    return menu.name === category
  })

  const menuItems = menu[0].menu

  return (
    <ul className="mx-5 p-sticky l-0" style={{top: '104px'}}>
      {menuItems.map((menu, key) => {
        const liClass = classnames('br-2 wc-transform', {
          'c-tertiary-400': menu.name !== doc,
          'hover:translate': menu.name !== doc,
          'hover:c-tertiary-500': menu.name !== doc,
          'hover:bg-secondary-100': menu.name === doc,
          'bg-secondary-100': menu.name === doc,
          'c-secondary-500': menu.name === doc
        })

        return (
          <li className={liClass} key={menu.id}>
            <Link
              to={menu.route}
              className="c-inherit py-2 pl-2 d-block td-none fs-body c-pointer">
              {key + 1}. {menu.name}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;