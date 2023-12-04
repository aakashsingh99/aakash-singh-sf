import { FC, ReactNode, useState } from 'react'

export type SummaryDetailProps = {
	badge?: string,
	children?: ReactNode
  summary?: string,
  title: string,
}

export const SummaryDetail : FC<SummaryDetailProps> = ({badge, children, summary, title}:SummaryDetailProps) => {
	const [toggle, setToggle] = useState(true);

  return (
    <div className="slds-summary-detail slds-is-open">
        <div 
					className={`slds-m-right_small ${!toggle && 'rotated'}`} 
					onClick={() => setToggle(!toggle)}
				>
            <svg className="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span className="slds-assistive-text">Toggle details</span>
        </div>
        <div>
          <div className="slds-summary-detail__title">
            <div className="slds-grid">
                <h3 className="slds-text-heading_small slds-truncate slds-p-right_small" title={title}>{title}</h3>
                <span className="slds-badge"> {badge} </span>
              </div>
              <p>{summary}</p>
          </div>
          {
            toggle &&
            (<div aria-hidden="false" className="slds-summary-detail__content" id="expando-unique-id">
              <p>
                  {children}
              </p>
          </div>)
          }
        </div>
    </div>
  )
}
