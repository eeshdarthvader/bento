import React from 'react';
// import { Swatch } from '@components/Swatch'
import { Table, TRow, TCol } from '@components/Table'

const scale = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const ColorRow = ({number, palette}) => {
  return (
    <TRow className={`flex flex-middle bl bw-8 bc-${palette}-${number}`}>
      <TCol
        className="pl-2 flex-none flex flex-middle c-grey-50 fw-500 h-40"
        style={{ width: '132px' }}
      >
        <div className={`w-12 h-12 br-100 bg-${palette}-${number}`} />
        <code>${palette}-{number}</code>
      </TCol>
      <TCol className="flex-1 flex flex-middle c-grey-50 fw-500 h-40">
        <code>.c-{palette}-{number}</code>
      </TCol>
      <TCol className="flex-1 flex flex-middle c-grey-50 fw-500 h-40">
        <code>.bg-{palette}-{number}</code>
      </TCol>
      <TCol className="flex-1 flex flex-middle c-grey-50 fw-500 h-40">
        <code>.bc-{palette}-{number}</code>
      </TCol>
    </TRow>
  )
}

const ColorRows = ({palette}) => {
  return (
    <>
      {scale.map((number, index) => {
        return (
          <ColorRow
            key={index}
            number={number}
            palette={palette}
          />
        )
      })}
    </>
  )
}

const ColorTable = (props) => {
  return (
    <Table>
      <TRow className="flex flex-between p-3 bg-tertiary-100 c-pointer">
        <TCol className="flex-none w-8 c-tertiary-500 fw-500">
          &nbsp;
        </TCol>
        <TCol className="pl-2 flex-1 c-tertiary-500 fw-500">
          SCSS variable
        </TCol>
        <TCol className="nml-2 flex-1 c-tertiary-500 fw-500">
          Text colour
        </TCol>
        <TCol className="pl-2 flex-1 c-tertiary-500 fw-500">
          Background colour
        </TCol>
        <TCol className="pl-2 flex-1 c-tertiary-500 fw-500">
          Border colour
      </TCol>
      </TRow>
      <ColorRows {...props} />
    </Table>
  )
}

export default ColorTable