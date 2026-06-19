import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import DoctorDetails from './pages/DoctorDetails'
import Appointments from './pages/Appointments'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={
          <div className='min-h-screen bg-cream'>
            <Navbar />
            <main className='pt-20 min-h-screen'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctor/:id" element={<DoctorDetails />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/services" element={<Services />} />

              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App