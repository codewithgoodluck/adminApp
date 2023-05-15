import { Navigate, Outlet } from "react-router-dom"
import { authService } from "../services/authService"

export const AuditorPrivateRoute = () => {
    
   return (authService.getUserRole() === 'auditor') ? <Outlet/> : <Navigate to="/login" />
}