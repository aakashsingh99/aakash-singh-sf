import { Card } from "@components/Card"
import { ExpandableSection } from "@components/ExpandableSection"
import { FC } from "react"

export const ExperiencePanel : FC = () => {
  return (
    <Card>
        <ExpandableSection title="Associate, Cognizant" badge="Oct, 2023 - Present">
          <div className="slds-p-bottom_small slds-m-bottom_small slds-border_bottom">
            <ul className="bullet-ul slds-m-left_small">
              <li>
                Perform feasibility analysis and work on proof-of-concepts for designing requirements.
              </li>
              <li>
                Design and develop a second MyInsights Dashboard for the Medical Rep at Territory level, providing actionable insights and data visualization to enhance decision-making processes.
              </li>
              <li>
                Troubleshoot routine problems and work on enhancements
              </li>
            </ul>
          </div>
        </ExpandableSection>
        <ExpandableSection title="Programmer Analyst, Cognizant" badge="Jul 2022 - Sep 2023">
          <div className="slds-p-bottom_small slds-m-bottom_small slds-border_bottom">
              <ul className="bullet-ul slds-m-left_small">
                <li>
                  Working as sole Offshore POC to design and implement a dashboard using ReactJS enabling efficient management of interactions with Accounts. Integrated the interface with Veeva MyInsights to provide enhanced reporting capabilities, thus improving productivity of Medical Representatives.
                </li>
                <li>
                  Worked on an Integration module from scratch to search, filter & add records from a different org. Used Async apex to poll the data on daily interval. UI made with LWC and Integration done with REST.
                </li>
                <li>
                  Worked on the Suggestions module in Veeva CRM, Added functionality to Myinsights dashboard to allow users to take action on suggestions from one place.
                </li>
                <li>
                  Worked on optimization of a module to bulk update records from uploaded csv by end user, furthur customized for several countries. Successfully decreased dml, soql counts and CPU usage.
                </li>
              </ul>
          </div>
        </ExpandableSection>
        <ExpandableSection title="Programmer Analyst Trainee, Cognizant" badge="Jul 2021 - Jun-2022">
          <ul className="bullet-ul slds-m-left_small">
            <li>
              Contributed to the development of new features and extended functionality of Veeva Event Management (VEM) for a Global Pharma Company, to support additional markets and event types.
            </li>
            <li>
              Migrated declarative functionality to programmatic ones, optimizing the VEM approval process, resulting in a reduction of over 75% in maintained components
            </li>
          </ul>
        </ExpandableSection>
    </Card>
  )
}
