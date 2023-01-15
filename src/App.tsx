/*
 * @Author: LinRenJie
 * @Date: 2023-01-14 19:02:00
 * @LastEditTime: 2023-01-15 12:19:03
 * @Description: 
 * @FilePath: /react/src/App.tsx
 * @Email: xoxosos666@gmail.com
 */
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App
