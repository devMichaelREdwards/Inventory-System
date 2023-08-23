import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import HomePage from '../pages/HomePage';
import { randomRange } from '../../../global/helpers/math';
import NoPage from '../pages/NoPage';

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
                {/* Add home routes here */}
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    );
}
export default HomeRoutes;
