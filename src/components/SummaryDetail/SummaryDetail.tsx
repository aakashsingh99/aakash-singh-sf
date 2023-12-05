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
            <div className="slds-grid slds-text-title_caps">
                <h2 className="slds-text-heading_small  slds-p-right_small" title={title}>{title} <span className="slds-badge_inverse"> {badge} </span></h2>
              </div>
              <p>{summary}</p>
          </div>
          {
            toggle &&
            (<div aria-hidden="false" className="slds-summary-detail__content" id="expando-unique-id">
              <div>
                  {children}
              </div>
          </div>)
          }
        </div>
    </div>
  )
}
