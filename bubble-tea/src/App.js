import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerOrder from './CustomOrder';
import Menu from './Menu';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Menu />} />
                    <Route exact path="/custom-order" element={<CustomerOrder />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
