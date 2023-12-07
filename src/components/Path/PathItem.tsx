import clsx from "clsx"
import { FC } from "react"

const statusClassMapping : Record<Status,string> = {
  complete : 'slds-is-complete',
  current: 'slds-is-current',
  incomplete: 'slds-is-incomplete',
}

type Status = 'complete' | 'current' | 'incomplete'

export type PathItemProps = {
  active: boolean,
  pathId: string,
  status: Status,
  tabIndex: number,
  title: string,
}

export const PathItem : FC<PathItemProps> = ({active, pathId, status, tabIndex, title}:PathItemProps) => {
  return (
    <li className={clsx(
          "slds-path__item",
          statusClassMapping[status],
          active && 'slds-is-active'
      )} 
      role="presentation"
    >
        <a aria-selected={status === "current" ? "true" : "false"} className="slds-path__link" href="#" id={pathId} role="option" tabIndex={tabIndex}>
            <span className="slds-path__stage">
            <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>
            <span className="slds-assistive-text">
              {status === "complete" ? 'Stage Complete' : status === 'current' ? 'Current Stage:' : ''}
            </span>
            </span>
            <span className="slds-path__title">{title}</span>
        </a>
    </li>
  )
}
