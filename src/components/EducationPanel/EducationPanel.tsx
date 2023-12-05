import { Card } from '@components/Card'
import { ExpandableSection } from '@components/ExpandableSection'
import { FC } from 'react'

export const EducationPanel : FC = () => {
  return (
    <Card>
        <div className='slds-page-header__title slds-m-bottom_medium'>
            Education
        </div>
        <ExpandableSection title="B.Tech in CSE" badge="2017-2021">
            <div className="slds-p-bottom_small slds-m-bottom_small slds-border_bottom">
                <div>
                    TECHNO MAIN SALT LAKE, MAKAUT, WB
                </div>
                <div>
                    DGPA: 8.43
                </div>
            </div>
        </ExpandableSection>
    </Card>
  )
}
