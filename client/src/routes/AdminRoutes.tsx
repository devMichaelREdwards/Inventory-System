import { Routes, Route } from 'react-router-dom';

const AdminHome = () => {
    return <>Admin Home</>;
};

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='admin/*' element={<AdminHome />} />
        </Routes>
    );
};

export default AdminRoutes;
