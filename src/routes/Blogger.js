import { Navigate, Outlet } from "react-router-dom"
import { authService } from "../services/authService"

export const BloggerPrivateRoute = () => {
    
   return (authService.getUserRole() === 'blogger') ? <Outlet/> : <Navigate to="/login" />
}