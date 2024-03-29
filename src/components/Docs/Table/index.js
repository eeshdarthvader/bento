import React from 'react'
import classNames from 'classnames'

const Table = props => {
  return (
    <div className="table w-100p br-4 box-border" {...props}>
      {props.children}
    </div>
  )
}

const TRow = props => {
  return (
    <div className="flex flex-between p-12 hover:bg-grey-05 c-pointer box-border" {...props}>
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
