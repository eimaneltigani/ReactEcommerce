import React from 'react';
import { isThisTypeNode, resolveTripleslashReference } from 'typescript';
import NavBar from './NavBar';
import productArray from './productArray';
import ProductTile from './ProductTile';
import '../css/Home.css';
// import cartReducer from './components/reducers/cartReducer';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';


class Home extends React.Component {
    render() {
        let tiles =[];
        return (
            <div>
                <div className='HomePageHeader'>
                    <h1>Welcome to Eiman's Health and Beauty Shop!</h1>
                    <h3>Choose products that support your wellness and help you feel <span>gorgeous.</span></h3>
                </div>
                <div>
                    <h2>Beauty</h2>
                    <div className="product-list">
                        {productArray.map( (prod, index) => {
                            if (prod.category == "Beauty") {
                                return (
                                    <div key={prod.id} className="basket-item">
                                        <ProductTile key={index} id={prod.id} />
                                    </div>
                                )
                            }
                         })}
                    </div>
                </div>
                <div>
                    <h2>Health</h2>
                    <div className="product-list">
                        {productArray.map( (prod, index) => {
                            if (prod.category == "Wellness") {
                                return (
                                    <div key={prod.id} className="basket-item">
                                        <ProductTile key={index} id={prod.id} />
                                    </div>
                                )
                            }
                         })}
                    </div>
                </div>
                <div>
                    <h2>Essentials</h2>
                    <div className="product-list">
                        {productArray.map( (prod, index) => {
                            if (prod.category == "Essential") {
                                return (
                                    <div key={prod.id} className="basket-item">
                                        <ProductTile key={index} id={prod.id} />
                                    </div>
                                )
                            }
                         })}
                    </div>
                </div>
            </div>
        );

    }

}

export default Home;