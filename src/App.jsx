import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';




function App() {


   return (

      <main className="bg-indigo-400 h-screen">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/team" element={<Team />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/calendar" element={<Calendar />} />
            </Routes>
         </Router>
       
      </main>


   )
}

export default App
