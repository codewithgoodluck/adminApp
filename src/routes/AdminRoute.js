import { Navigate, Outlet } from "react-router-dom"
import { authService } from "../services/authService"

export const AdminPrivateRoute = () => {
    
   return (authService.getUserRole() === 'admin') ? <Outlet/> : <Navigate to="/login" />
}