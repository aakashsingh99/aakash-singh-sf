import Brand from "@components/Brand/Brand"
import { ResumeHeader } from "@components/ResumeHeader"
import { Card } from "@components/Card"
import { Path } from "@components/Path"
import { ExperiencePanel } from "@components/ExperiencePanel"
import { RecordDetail } from "@components/RecordDetail/RecordDetail"
import { EducationPanel } from "@components/EducationPanel"
import { CertificationPanel } from "@components/CertficationPanel"

function App() {
  return (
    <>
      <Brand variant="large"/>
      <div className="slds-m-around_small">
        <ResumeHeader/>
      </div>
      <div className="slds-m-horizontal_small">
        <Card>
          <Path/>
        </Card>
      </div>
      <div className="slds-grid slds-wrap">
        <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_8-of-12">
          <div className="slds-m-vertical_small slds-m-horizontal_small">
            <ExperiencePanel/>
          </div>
          <div className="slds-m-vertical_small slds-m-horizontal_small">
            <EducationPanel/>
          </div>
        </div>
        <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12">
          <div className="slds-m-vertical_small slds-m-horizontal_small">
            <RecordDetail/>
          </div>
          <div className="slds-m-vertical_small slds-m-horizontal_small">
            <CertificationPanel/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
