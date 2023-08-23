import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from '../front/components/navbar/NavBar';
import HomePage from '../front/components/pages/HomePage';
import NoPage from '../front/components/pages/NoPage';
import LoginPage from '../front/components/pages/LoginPage';

interface ILayoutProps {
    title: string;
}

const Layout: React.FC<ILayoutProps> = () => {
    return (
        <div className='page-wrapper'>
            <NavBar />
            <Outlet />
        </div>
    );
};

function HomeRoutes() {
    return (
        <Routes>
            <Route path='admin/*' element={null} />
            <Route
                path='/'
                element={<Layout title={'Inventory System Demo'} />}>
                <Route path='' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                {/* Add home routes here */}
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    );
}
export default HomeRoutes;
