import React, { useEffect, useState } from 'react'
import AdminHome from './AdminHome'
import AdminSignIn from './AdminLogin'
import { AuthUser } from './AuthRouter'

export default function RequireAdminAuth() {
    const auth = AuthUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        auth.checkAdmin()
        setLoading(true)
    }, [])

    if (loading && !auth?.admin) {
        return <AdminSignIn />
    }
    return <AdminHome />
}
