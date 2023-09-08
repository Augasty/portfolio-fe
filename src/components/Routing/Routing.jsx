
import { Route, Routes } from 'react-router'
import Resume from './Resume/Resume'

import BasicDetails from '../FormComponents/BasicDetails'
import EducationalDetails from '../FormComponents/EducationalDetails'
import ExperienceDetails from '../FormComponents/ExperienceDetails'

const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Resume/>} />
        <Route path='/basic' element={<BasicDetails />} />
        <Route path='/education' element={<EducationalDetails />} />
        <Route path='/experience' element={<ExperienceDetails />} />

        </Routes>
    </div>
  )
}

export default Routing