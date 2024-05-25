import { Route, Routes } from "react-router-dom";
import { AboutUs, Detailsfilling, Header, Preview, Templates } from "./pages";
import { Education, KeySkills, MyResume, PersonalInfo, WorkExperience } from "./components/index";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<Templates />} />
          <Route path='/myresume' element={<MyResume />} />
          <Route exact path='/Template' element={<Templates />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/Detailsfilling" element={<Detailsfilling />} />
          <Route exact path="/personal" element={<PersonalInfo />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path='/work' element={<WorkExperience />} />
          <Route exact path='/skills' element={<KeySkills />} />
          <Route exact path='/preview' element={<Preview />} />
        </Routes>
        <ToastContainer position='top-right' theme='dark' />
      </section>
    </div>
  );
}

export default App;
