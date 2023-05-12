import PanelContainer from './PanelContainer'
import PanelCard from './PanelCard'
import PanelSkeleton from './PanelSkeleton'

const Panel = () => {
  return (
    // {loading &&
    //       <PanelContainer>
    //         <PanelSkeleton />
    //       </PanelContainer>
    //     }
        <PanelContainer>
          <PanelCard />
        </PanelContainer>
    
  )
}

export default Panel