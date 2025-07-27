import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Team from './pages/Team'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Calendar from './pages/Calendar'

const pageTransition = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
   exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const AppContent = () => {
   const location = useLocation()

   return (
      <>
         <Navbar />
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route
                  path="/"
                  element={
                     <motion.div {...pageTransition}>
                        <Home />
                     </motion.div>
                  }
               />
               <Route
                  path="/dashboard"
                  element={
                     <motion.div {...pageTransition}>
                        <Dashboard />
                     </motion.div>
                  }
               />
               <Route
                  path="/team"
                  element={
                     <motion.div {...pageTransition}>
                        <Team />
                     </motion.div>
                  }
               />
               <Route
                  path="/projects"
                  element={
                     <motion.div {...pageTransition}>
                        <Projects />
                     </motion.div>
                  }
               />
               <Route
                  path="/calendar"
                  element={
                     <motion.div {...pageTransition}>
                        <Calendar />
                     </motion.div>
                  }
               />
            </Routes>
         </AnimatePresence>
      </>
   )
}

function App() {
   return (
      <main className="bg-indigo-400 pt-16 min-h-screen overflow-x-hidden">
         <Router>
            <AppContent />
         </Router>
      </main>
   )
}

export default App
