import { House, Leaf, User } from 'lucide-react'
import "./BottomNav.css"
import { useNavigate } from 'react-router-dom'

export const BottomNav = () => {

    const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
        <button className="nav-item">
          <House onClick={()=>{navigate('/');}} />
        </button>
        <button className="nav-item" onClick={()=>{navigate('/categorias');}}>
          <Leaf />
        </button>
        <button className="nav-item" onClick={()=>{navigate('/perfil');}}>
          <User />
        </button>
      </nav>
  )
}
