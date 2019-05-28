import React from 'react'
import classNames from 'classnames'

const Table = props => {
  return (
    <div className="w-100p ba bc-grey-10 br-4" {...props}>
      {props.children}
    </div>
  )
}

const TRow = props => {
  return (
    <div className="flex flex-between p-12 hover:bg-grey-05 c-pointer" {...props}>
      {props.children}
    </div>
  )
}

const TCol = props => {
  const colClass = classNames(
    'flex-1 flex flex-middle',
    {
      'flex-end': props.end
    }
  )
  return (
    <div className={colClass} {...props}>
      {props.children}
    </div>
  )
}

export {
  Table,
  TRow,
  TCol
}
