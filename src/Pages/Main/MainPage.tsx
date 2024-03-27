import { NavigationWrapper } from '../../Components/Wrappers/NavigationWrapper'
import { Outlet } from 'react-router-dom'

export const MainPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <NavigationWrapper />
            <Outlet />
        </div>
    )
}
