import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const GoBack = ({ className }) => {

  const navigate = useNavigate();

  return (
    <div style={{ cursor: "pointer" }} onClick={() => { navigate(-1) }} className={className}>
      <ArrowLeft />
    </div>
  )
}

export default GoBack