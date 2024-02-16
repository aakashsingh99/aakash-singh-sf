import { Card } from '@components/Card'
import { SummaryDetail } from '@components/SummaryDetail'
import { FC } from 'react'

export const CertificationPanel : FC = () => {
  return (
    <Card>
        <div className='slds-page-header__title slds-m-bottom_medium'>
            Certifications
        </div>
        <div className="slds-border_bottom slds-p-bottom_x-small slds-m-bottom_x-small">
            <SummaryDetail title="Salesforce Certified Administrator">
                <div>
                    Credential ID: 2822981
                </div>
                <div>
                    Issued: Dec, 2022
                </div>
            </SummaryDetail>
        </div>
        <div className="slds-border_bottom slds-p-bottom_x-small slds-m-bottom_x-small">
            <SummaryDetail title="Salesforce Certified Platform Developer I">
                <div>
                    Credential ID: 3026876
                </div>
                <div>
                    Issued: Feb, 2023
                </div>
            </SummaryDetail>
        </div>
        <div className="slds-border_bottom slds-p-bottom_x-small slds-m-bottom_x-small">
            <SummaryDetail title="Salesforce Certified Platfrom App Builder">
                <div>
                    Credential ID: 3449413
                </div>
                <div>
                    Issued: Jun, 2023
                </div>
            </SummaryDetail>
        </div>
        <div className="slds-border_bottom slds-p-bottom_x-small slds-m-bottom_x-small">
            <SummaryDetail title="Salesforce Certified Associate">
                <div>
                    Credential ID: 3347050
                </div>
                <div>
                    Issued: Apr, 2023
                </div>
            </SummaryDetail>
        </div>
        <div className="slds-border_bottom slds-p-bottom_x-small slds-m-bottom_x-small">
            <SummaryDetail title="Salesforce Certified Platform Developer II">
                <div>
                    Credential ID: 4130302
                </div>
                <div>
                    Issued: Feb, 2024
                </div>
            </SummaryDetail>
        </div>
    </Card>
  )
}
