import { Card } from "@components/Card"
import { ExpandableSection } from "@components/ExpandableSection"
import { FC } from "react"

export const ExperiencePanel : FC = () => {
  return (
    <Card>
        <div className='slds-page-header__title slds-m-bottom_medium'>
            Experience
        </div>
        <ExpandableSection title="Associate, Cognizant" subtitle="Role: Sr. Salesforce Developer" badge="Oct, 2023 - Present">
          <div className="slds-p-bottom_small slds-m-bottom_small slds-border_bottom">
            <ul className="bullet-ul slds-m-left_small">
              <li>
                Collaborated with stakeholders to gather and analyze business requirements, translating them into effective salesforce solutions
              </li>
              <li>
                Acted as the offshore <strong>Point of Contact</strong> to scale and enhance prior delivered MVP  across multiple markets. Setup Azure DevOps and Git to streamline project management
              </li>
              <li>
                Created comprehensive <strong>training materials</strong> for Veeva MyInsights, ensuring that teams across the organization could effectively utilize it for data-driven decision-making. The training materials received positive feedback for their clarity and effectiveness.              
              </li>
              <li>
                Identified key improvements from prior work on MyInsights visualizations and developed the solution in salesforce org ensuring widespread adoption for maximum organizational benefit
              </li>
            </ul>
          </div>
        </ExpandableSection>
        <ExpandableSection title="Programmer Analyst, Cognizant" subtitle="Role: Salesforce Developer" badge="Jul 2022 - Sep 2023">
          <div className="slds-p-bottom_small slds-m-bottom_small slds-border_bottom">
              <ul className="bullet-ul slds-m-left_small">
                <li>
                  Worked on an <strong>Integration</strong> module from scratch to search, filter & add records from a different org. 
                  <br/>Used Async apex to poll the data on daily interval. UI made with LWC and Integration done with REST                
                </li>
                <li>
                  Designed and developed a dashboard using <strong>ReactJS</strong> enabling efficient management of interactions with Accounts for pre call planning. 
                  <br/>Integrated the interface with Veeva <strong>MyInsights</strong> & Salesforce org to provide enhanced reporting capabilities, thus improving productivity of Medical Representatives.                
                </li>
                <li>
                 Configured Veeva CRM's Suggestions module and integrated action functionality in MyInsights. 
                 <br/>Implemented <strong>Reports and Dashboards</strong> for L2 Managers to assess suggestion efficiency.                
                </li>
                <li>
                  Worked on optimization of a module to bulk update records from uploaded csv by end user, furthur customized for several countries. 
                  <br/>Successfully decreased dml, soql counts and CPU usage.                
                </li>
              </ul>
          </div>
        </ExpandableSection>
        <ExpandableSection title="Programmer Analyst Trainee, Cognizant" subtitle="Role: Trainee Salesforce Developer" badge="Jul 2021 - Jun-2022">
          <ul className="bullet-ul slds-m-left_small">
            <li>
              Contributed to the development of new features and extended functionality of <strong>Veeva Event Management (VEM)</strong> for a Global Pharma Company, to support additional markets and event types.
            </li>
            <li>
              Migrated declarative functionality to programmatic ones, optimizing the VEM approval process, resulting in a reduction of over 75% in maintained components
            </li>
            <li>
            <strong>Administered</strong> and maintained Salesforce instance, including user management, developing, testing, and implementing custom Salesforce solutions
            </li>
          </ul>
        </ExpandableSection>
    </Card>
  )
}
