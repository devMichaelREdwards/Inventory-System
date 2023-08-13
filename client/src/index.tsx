import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const dom = document.getElementById('root');
if (!dom) throw new Error('Failed to find the root element.');
const root = ReactDOM.createRoot(dom);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
