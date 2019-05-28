import React from 'react';
import { useMenus, Link } from 'docz'
import classnames from 'classnames'

const Menu = ({category, doc}) => {
  const allMenus = useMenus()

  // Get only category menus
  const menu = allMenus.filter(menu => {
    return menu.name === category
  })

  const menuItems = menu[0].menu

  return (
    <ul className="mt-32 mx-20">
      {menuItems.map((menu, key) => {
        const liClass = classnames('br-2', {
          'c-grey-70': menu.name !== doc,
          'hover:bg-grey-10': menu.name !== doc,
          'hover:bg-blue': menu.name === doc,
          'bg-blue': menu.name === doc,
          'c-white': menu.name === doc
        })

        return (
          <li className={liClass} key={menu.id}>
            <Link
              to={menu.route}
              className="c-inherit py-12 pl-12 d-block td-none fs-body-2">
              {menu.name}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;