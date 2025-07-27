// src/pages/Projects.jsx
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import image1 from '../assets/proyecto1.png'
import image2 from '../assets/proyecto2.png'
import image3 from '../assets/proyecto3.png'

const projects = [
  {
    title: 'Gestor de Tareas',
    description: 'Una app para gestionar tareas con etiquetas y recordatorios.',
    image: image1,
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web responsive para mostrar tu experiencia y proyectos.',
    image: image2,
  },
  {
    title: 'E-commerce Moderno',
    description: 'Tienda online con carrito, pagos y panel de admin.',
    image: image3,
  },
    {
    title: 'Gestor de Tareas',
    description: 'Una app para gestionar tareas con etiquetas y recordatorios.',
    image: image1,
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web responsive para mostrar tu experiencia y proyectos.',
    image: image2,
  },
  {
    title: 'E-commerce Moderno',
    description: 'Tienda online con carrito, pagos y panel de admin.',
    image: image3,
  },
    {
    title: 'Gestor de Tareas',
    description: 'Una app para gestionar tareas con etiquetas y recordatorios.',
    image: image1,
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web responsive para mostrar tu experiencia y proyectos.',
    image: image2,
  },
  {
    title: 'E-commerce Moderno',
    description: 'Tienda online con carrito, pagos y panel de admin.',
    image: image3,
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (

    <div className="min-h-screen pt-10 px-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-white text-center text-3xl font-bold mb-4">Projects</h1>
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            delay={index * 0.1}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  )
}

export default Projects