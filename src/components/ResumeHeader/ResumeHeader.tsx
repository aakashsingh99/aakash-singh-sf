import { FC } from "react"
import { Button, ButtonGroup } from '@components/Button'

export const ResumeHeader : FC = () => {
    const experience: string = `${Math.floor(((new Date().getTime() - new Date('2021-07-01').getTime()) / (1000 * 60 * 60 * 24 * 30.44)) / 12)} years and ${Math.floor(((new Date().getTime() - new Date('2021-07-01').getTime()) / (1000 * 60 * 60 * 24 * 30.44)) % 12)} months`;
    return (
        <div className="slds-page-header slds-page-header_record-home">
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-title">
                    <div className="slds-media">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-opportunity">
                                <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span>
                                            Resume
                                        </span>
                                        <span className="slds-page-header__title slds-truncate" title="Acme - 1,200 Widgets">
                                            Aakash Singh
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-page-header__col-actions">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <Button variant="neutral">
                                <span className="slds-text-not-selected">
                                    <svg className="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                                    </svg>
                                    Hire
                                </span>
                            </Button>
                        </div>
                        <ButtonGroup>
                            <Button>Contact</Button>
                            <Button>LinkedIn</Button>
                            <Button>Trailblazer</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="slds-page-header__row slds-page-header__row_gutters">
                <div className="slds-page-header__col-details">
                <ul className="slds-page-header__detail-row">
                    <li className="slds-page-header__detail-block">
                        <div className="slds-text-title slds-truncate" title="Experience">Experience</div>
                        <div className="slds-truncate" title="MobileNumber">
                            {experience}
                        </div>
                    </li>
                    <li className="slds-page-header__detail-block">
                        <div className="slds-text-title slds-truncate" title="Email">Email</div>
                        <div className="slds-truncate" title="Hyperlink">
                            <a href="mailto:aakash.1k99@gmail.com">aakash.1k99@gmail.com</a>
                        </div>
                    </li>
                    <li className="slds-page-header__detail-block">
                        <div className="slds-text-title slds-truncate" title="Address">Address</div>
                        <div className="slds-truncate" title="MobileNumber">Kolkata, West Bengal</div>
                    </li>
                </ul>
                </div>
            </div>
        </div>

    )
}