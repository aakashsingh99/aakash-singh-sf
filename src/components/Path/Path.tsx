import { Button } from "@components/Button"
import { FC } from "react"

export const Path : FC = () => {
  return (
    <div className="slds-path">
        <div className="slds-grid slds-path__track">
            <div className="slds-grid slds-path__scroller-container">
            <div className="slds-path__scroller">
                <div className="slds-path__scroller_inner">
                <ul className="slds-path__nav" role="listbox" aria-orientation="horizontal" aria-labelledby="slds-path__stage-name">
                    <li className="slds-path__item slds-is-complete" role="presentation">
                    <a aria-selected="false" className="slds-path__link" href="#" id="path-6" role="option" tabIndex={-1}>
                        <span className="slds-path__stage">
                        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span className="slds-assistive-text">Stage Complete</span>
                        </span>
                        <span className="slds-path__title">Contacted</span>
                    </a>
                    </li>
                    <li className="slds-path__item slds-is-complete" role="presentation">
                    <a aria-selected="false" className="slds-path__link" href="#" id="path-7" role="option" tabIndex={-1}>
                        <span className="slds-path__stage">
                        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span className="slds-assistive-text">Stage Complete</span>
                        </span>
                        <span className="slds-path__title">Open</span>
                    </a>
                    </li>
                    <li className="slds-path__item slds-is-complete" role="presentation">
                    <a aria-selected="false" className="slds-path__link" href="#" id="path-8" role="option" tabIndex={-1}>
                        <span className="slds-path__stage">
                        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span className="slds-assistive-text">Stage Complete</span>
                        </span>
                        <span className="slds-path__title">Unqualified</span>
                    </a>
                    </li>
                    <li className="slds-path__item slds-is-current slds-is-active" role="presentation">
                    <a aria-selected="true" className="slds-path__link" href="#" id="path-9" role="option" tabIndex={0}>
                        <span className="slds-path__stage">
                        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span className="slds-assistive-text">Current Stage:</span>
                        </span>
                        <span className="slds-path__title">Nurturing</span>
                    </a>
                    </li>
                    <li className="slds-path__item slds-is-incomplete" role="presentation">
                    <a aria-selected="false" className="slds-path__link" href="#" id="path-10" role="option" tabIndex={-1}>
                        <span className="slds-path__stage">
                        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        </span>
                        <span className="slds-path__title">Closed</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="slds-grid slds-path__action">
            <span id="slds-path__stage-name" className="slds-path__stage-name">Stage: Unqualified</span>
                <Button variant="brand" className='slds-path__mark-complete'>
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>Mark Status as Complete
                </Button>
            </div>
        </div>
        </div>
  )
}
