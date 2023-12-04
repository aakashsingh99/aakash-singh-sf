import { Children, FC, ReactNode } from 'react'

type ButtonGroupProps = {
    children: ReactNode
}

export const ButtonGroup : FC<ButtonGroupProps> = ({children}) => {
  return (
    <div className="slds-page-header__control">
        <ul className="slds-button-group-list">
            {
                Children.map(
                    children, (child) => (<li>{child}</li>)
                )
            }
        </ul>
    </div>
  )
}
