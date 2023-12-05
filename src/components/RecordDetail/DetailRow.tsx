import { FC } from 'react'

export type DetailRow = {
  field: string,
  value?: string,
}

export const DetailRow : FC<DetailRow> = ({field, value}: DetailRow) => {
  return (
    <div className='slds-m-bottom_xx-small'>
      <div className="slds-border_bottom slds-p-bottom_xx-small">
        <div style={{color:'gray'}} className="slds-text-body_small">{field}</div>
        <div className="slds-text-heading_small">{value}</div>
      </div>
    </div>
  )
}

export default DetailRow