import { useNavigate } from "react-router-dom"
import { AuthUser } from "./AuthRouter"

export default function Home() {

    const navigate = useNavigate()
    const handlechange = () => {
        localStorage.removeItem('userConfig')
        navigate('/signup', { replace: true })
    }
    return (
        <div>
            <h1>Form submitted Successfully</h1>
            <button onClick={handlechange}>Log out</button>

        </div>
    )
}
