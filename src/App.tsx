import Brand from "@components/Brand/Brand"
import { ResumeHeader } from "./components/ResumeHeader"

function App() {
  return (
    <>
      <Brand variant="large"/>
      <div className="slds-m-around_small">
        <ResumeHeader/>
      </div>
    </>
  )
}

export default App
