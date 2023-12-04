import { FC, ReactNode } from 'react'


export type CardProps = {
    children?: ReactNode
}

export const Card : FC<CardProps> = ({children}:CardProps) => {
  return (
    <div className="slds-card slds-p-around_small">
        {children}
    </div>
  )
}
