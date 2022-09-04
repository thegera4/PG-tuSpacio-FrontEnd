import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
    const { logout } = useAuth0();
    return () => logout({ returnTo: window.location.origin});
}