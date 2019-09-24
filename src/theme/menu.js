import React from 'react';
import { Link } from 'gatsby'
import classnames from 'classnames'

const Menu = ({ doc, menus }) => {

  const headings = Object.keys(menus)

  return (
    <ul className="mx-5 p-sticky l-0 pb-10" style={{ top: '104px' }}>
      {headings.map((heading) => {
        return (
          <li>
            <ul>
              <h2 className="py-3 mt-2 c-tertiary-300 tt-uppercase ls-wide fs-caption-2">{heading}</h2>
              {menus[heading].map((menu, key) => {
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
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;