import { FC, ReactNode, useState } from 'react'

export type ExpandableSectionProps = {
	badge?: string,
	children?: ReactNode
    subtitle?: string,
    title: string,
}

export const ExpandableSection: FC<ExpandableSectionProps> = ({badge, children, subtitle, title} : ExpandableSectionProps) => {
    const [toggle, setToggle] = useState(true);

  return (
    <div className={`slds-section ${toggle && 'slds-is-open'}`}>
        <div className="slds-text-title_bold slds-section__title slds-theme_shade slds-p-left_small" onClick={() => setToggle(!toggle)}>
            <h3>
                <span className={`${!toggle && 'rotated'}`}>
                    <svg className="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                    </svg>    
                </span>
                <span className="slds-truncate slds-text-heading_medisum slds-m-left_small" title={title}>
                    {title}
                    <span className="slds-badge slds-badge_inverse slds-m-left_small slds-float_right"> {badge} </span>
                </span>
            </h3>
        </div>
        <div aria-hidden="false" className="slds-section__content slds-m-left_medium">
            <h5 className="slds-text-title_bold slds-p-left_medium">
                {subtitle}
            </h5>
            {children}
        </div>
    </div>
  )
}
