import './App.scss';
import AdminRoutes from './routes/AdminRoutes';
import HomeRoutes from './routes/HomeRoutes';

function App() {
    return (
        <>
            <AdminRoutes />
            <HomeRoutes />
        </>
    );
}

export default App;
