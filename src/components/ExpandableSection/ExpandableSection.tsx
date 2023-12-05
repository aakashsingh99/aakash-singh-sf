import { FC, ReactNode, useState } from 'react'

export type ExpandableSectionProps = {
	badge?: string,
	children?: ReactNode
    title: string,
}

export const ExpandableSection: FC<ExpandableSectionProps> = ({badge, children, title} : ExpandableSectionProps) => {
    const [toggle, setToggle] = useState(true);

  return (
    <div className={`slds-section ${toggle && 'slds-is-open'}`}>
        <h3 style={{fontWeight:'bold'}} className="slds-section__title slds-theme_shade slds-p-left_small" onClick={() => setToggle(!toggle)}>
            <span className={`${!toggle && 'rotated'}`}>
                <svg className="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                </svg>    
            </span>
            <span className="slds-truncate slds-text-heading_medisum slds-m-left_small" title={title}>
                {title}
                <span className="slds-badge slds-badge_inverse slds-m-left_small"> {badge} </span>
            </span>
        </h3>
        <div aria-hidden="false" className="slds-section__content slds-m-left_medium">
            {children}
        </div>
    </div>
  )
}
