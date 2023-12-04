import Brand from "@components/Brand/Brand"
import { ResumeHeader } from "./components/ResumeHeader"
import { Card } from "@components/Card"
import { Path } from "@components/Path"

function App() {
  return (
    <>
      <Brand variant="large"/>
      <div className="slds-m-around_small">
        <ResumeHeader/>
      </div>
      <div className="slds-m-around_small">
        <Card>
          <Path/>
        </Card>
      </div>
    </>
  )
}

export default App
