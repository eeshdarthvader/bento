import React from 'react';
import classNames from 'classnames'

const Cell = ({ children, dark, className }) => {

  const cellClass = classNames(
    'c-white flex flex-middle flex-center h-40',
    {
      'bg-secondary-500': !dark,
      'bg-secondary-900': dark
    },
    className
  )

  return (
    <div className={cellClass}>
      {children}
    </div>
  );
}

export default Cell;