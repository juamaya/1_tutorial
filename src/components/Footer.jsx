// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Sobre Nosotros</h3>
          <p className="text-sm text-gray-400">
            Somos una empresa dedicada al desarrollo de soluciones digitales modernas.
            Creamos experiencias atractivas y funcionales para nuestros clientes.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Diseño Web</a></li>
            <li><a href="#" className="hover:text-white transition">Aplicaciones Móviles</a></li>
            <li><a href="#" className="hover:text-white transition">Consultoría UX/UI</a></li>
            <li><a href="#" className="hover:text-white transition">Soporte Técnico</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contacto</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: contacto@tuempresa.com</li>
            <li>Tel: +34 600 123 456</li>
            <li>Dirección: Calle Ficticia 123, Madrid</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Juamaya 🍺. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
