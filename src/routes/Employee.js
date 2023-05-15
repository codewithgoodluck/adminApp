import { Navigate, Outlet } from "react-router-dom"
import { authService } from "../services/authService"

export const EmployeePrivateRoute = () => {
    
   return (authService.getUserRole() === 'employee') ? <Outlet/> : <Navigate to="/login" />
}