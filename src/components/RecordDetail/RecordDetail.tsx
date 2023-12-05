import { Card } from '@components/Card'
import { FC } from 'react'
import DetailRow from './DetailRow'

export const RecordDetail : FC = () => {
  return (
    <Card>
        <div className="slds-m-bottom_small slds-text-title_bold">Additional Details</div>
        <div className="slds-m-horizontal_small">
          <DetailRow field="Salesforce Skills" value="LWC, Apex, Flow, SOQL"/>
          <DetailRow field="Veeva Skills" value="Veeva CRM, Veeva MyInsights, Veeva Event Management"/>
          <DetailRow field="Other Skills" value="Javascript, ReactJS"/>
          <DetailRow field="Language" value="English, Hindi, Bengali"/>
          <DetailRow field="Notice Period" value="90 days"/>
          <DetailRow field="Preferred Locations" value="Kolkata, Hyderabad, Bengaluru, Gurugram"/>
          <DetailRow field="Passport Available?" value="Yes"/>
        </div>
    </Card>
  )
}