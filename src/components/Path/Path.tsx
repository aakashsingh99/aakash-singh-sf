import { Button } from "@components/Button"
import { FC } from "react"
import { PathItem, PathItemProps } from "./PathItem"

const initPathList : PathItemProps[] = [
    {
        active: false,
        pathId: 'path-1',
        status: 'complete',
        tabIndex: -1,
        title: 'Open',
    },
    {
        active: false,
        pathId: 'path-2',
        status: 'complete',
        tabIndex: -1,
        title: 'Contacted',
    },
    {
        active: false,
        pathId: 'path-3',
        status: 'complete',
        tabIndex: -1,
        title: 'Unqualified',
    },
    {
        active: true,
        pathId: 'path-4',
        status: 'current',
        tabIndex: 1,
        title: 'Under Review',
    },
    {
        active: false,
        pathId: 'path-5',
        status: 'incomplete',
        tabIndex: -1,
        title: 'Hired',
    }
]

export const Path : FC = () => {
  return (
    <div>
        <div className="slds-path sld-p-around_small">
            <div className="slds-grid slds-path__track">
                <div className="slds-grid slds-path__scroller-container">
                    <div className="slds-path__scroller">
                        <div className="slds-path__scroller_inner">
                        <ul className="slds-path__nav" role="listbox" aria-orientation="horizontal" aria-labelledby="slds-path__stage-name">
                            {
                                initPathList.map( p => <PathItem key={p.pathId} {...p} />)
                            }
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="slds-grid slds-path__action">
                    <span id="slds-path__stage-name" className="slds-path__stage-name">Stage: Under Review</span>
                    <Button variant="brand" className='slds-path__mark-complete'>
                        <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>Mark Status as Complete
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
