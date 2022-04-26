import React from 'react';
import REACTDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import ProductDetails from './ProductDetails';
import Category from './Category';
import Cart from './Cart';

class MyRouters extends React.Component {
    render() {
    return (
        <Router>
            <NavBar />
            <div>
                <Routes>
                    <Route name="Home" exact path="/" element={<Home />}/>
                    <Route name="About" exact path="/About" element={<About />}/>
                    <Route name="ProductDetails" exact path="/product/:id" element={<ProductDetails />} />
                    <Route name="Category" exact path="/products/:category" element={<Category />} />
                    <Route name="Cart" exact path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
        );
    }   
}


export default MyRouters;