
import { Route, Routes } from 'react-router'
import Resume from './Resume/Resume'

import BasicDetails from '../FormComponents/BasicDetails'
import EducationalDetails from '../FormComponents/EducationalDetails'

const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Resume/>} />
        <Route path='/basic' element={<BasicDetails />} />
        <Route path='/education' element={<EducationalDetails />} />

        </Routes>
    </div>
  )
}

export default Routing