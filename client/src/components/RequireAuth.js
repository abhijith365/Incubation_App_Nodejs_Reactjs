import Home from "./Home"
import { useEffect, useState } from "react"
import { AuthUser } from "./AuthRouter"
import UserForm from "./UserForm"
import SignIn from "./UserLogin"

export default function RequireAuth({ children }) {
    const auth = AuthUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        auth.checkUser()
        setLoading(true)
    }, [])

    if (loading && !auth.user) {
        return <SignIn />
    }
    if (loading && auth.user.data.formStatus) {
        return <Home />
    } else {
        return <UserForm />
    }
}