import { FC } from "react"
import { Button, ButtonGroup } from '@components/Button'

export const ResumeHeader : FC = () => {
    const redirectTo = (url : string) => {
        window.open(url,'_blank');
    }

    return (
        <div className="slds-page-header slds-page-header_record-home">
            <div className="slds-page-header__row slds-grid slds-wrap">
                <div className="slds-page-header__col-title slds-size_1-of-1 slds-large-size_8-of-12">
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
                <div className="slds-m-top_small slds-page-header__col-actions slds-col slds-size_1-of-1 slds-large-size_4-of-12">
                    <div className="slds-page-header__controls slds-float_right">
                        <div className="slds-page-header__control">
                            <a href="mailto:aakash.1k99@gmail.com?subject=Job%20Offer%20Acceptance&amp;body=Dear%20Aakash,%0A%0ACongratulations!%20We%20are%20pleased%20to%20extend%20an%20offer%20of%20employment%20for%20the%20position%20of%20[Job%20Title]%20at%20[Company%20Name].%20We%20believe%20that%20your%20skills,%20experience,%20and%20enthusiasm%20make%20you%20an%20excellent%20fit%20for%20our%20team.%0A%0ADetails%20of%20the%20offer,%20including%20your%20start%20date,%20salary,%20and%20other%20relevant%20information,%20are%20outlined%20in%20the%20attached%20employment%20contract.%20Please%20review%20the%20terms%20carefully,%20and%20if%20you%20have%20any%20questions%20or%20require%20further%20clarification,%20do%20not%20hesitate%20to%20reach%20out.%0A%0ATo%20formally%20accept%20this%20offer,%20please%20sign%20and%20return%20the%20attached%20contract%20by%20[Date].%20Additionally,%20we%20would%20appreciate%20it%20if%20you%20could%20provide%20any%20necessary%20documentation%20and%20complete%20any%20pre-employment%20requirements%20outlined%20in%20the%20contract.%0A%0AWe%20are%20excited%20about%20the%20prospect%20of%20welcoming%20you%20to%20[Company%20Name],%20and%20we%20look%20forward%20to%20the%20positive%20contributions%20we%20know%20you%20will%20bring%20to%20our%20organization.%0A%0AOnce%20again,%20congratulations%20on%20your%20new%20position.%20We%20are%20eager%20to%20have%20you%20on%20board.%0A%0ABest%20regards,%0A[Your%20Name]%0A[Your%20Title]%0A[Company%20Name]%0A[Contact%20Information]">
                                <Button variant="neutral">
                                    <span className="slds-text-not-selected">
                                        <svg className="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
                                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                                        </svg>
                                            Hire
                                    </span>
                                </Button>
                            </a>
                        </div>
                        <ButtonGroup>
                            <Button onClick={()=> redirectTo('mailto:aakash.1k99@gmail.com')}>Contact</Button>
                            <Button onClick={()=> redirectTo('https://trailblazer.me/id/aakash1999')}>
                                <span className="slds-text-not-selected">
                                    Trailblazer
                                    <svg className="slds-button__icon slds-button__icon_small slds-button__icon_right" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#new_window"></use>
                                    </svg>
                                </span>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="slds-page-header__row slds-page-header__row_gutters">
                <div className="slds-page-header__col-details">
                    <ul className="slds-page-header__detail-row">
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title" title="Experience">Experience</div>
                            <div className="" title="MobileNumber">
                                2.5 Yrs
                            </div>
                        </li>
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title slds-truncate" title="Email">Email</div>
                            <div className="" title="Hyperlink">
                                <a href="mailto:aakash.1k99@gmail.com">aakash.1k99@gmail.com</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}