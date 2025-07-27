// src/components/ProjectModal.jsx
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modal = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
}

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl p-6 w-full max-w-lg shadow-lg relative"
            variants={modal}
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
          >
            <button
              onClick={onClose}
              className="absolute top-1 right-1 text-gray-400 hover:text-red-500 text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="rounded-md h-48 w-full object-cover mb-4 p-3"
            />

            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Aquí puedes incluir una descripción más completa del proyecto, funcionalidades, tecnologías usadas, o cualquier detalle adicional.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
