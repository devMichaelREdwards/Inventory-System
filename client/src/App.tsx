import './App.scss';
import AdminRoutes from './front/components/routes/AdminRoutes';
import HomeRoutes from './front/components/routes/HomeRoutes';

function App() {
    return (
        <>
            <AdminRoutes />
            <HomeRoutes />
        </>
    );
}

export default App;
