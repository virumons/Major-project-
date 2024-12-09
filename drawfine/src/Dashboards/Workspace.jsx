import React from 'react'
import SidepanelL from './panels/SidepanelL'
import SidepanelR from './panels/SidepanelR'
import Topbar from './panels/Topbar'
import Whiteboard from './panels/Whiteboard'

const Workspace = () => {
  return (
    <div>
      <Topbar />
      <div className='flex flex-row'>
      <SidepanelL />
      <Whiteboard />
      <SidepanelR />
      </div>
    </div>
  )
}

export default Workspace
