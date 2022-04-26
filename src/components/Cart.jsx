import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem, subtractQuantity, addQuantity } from '../redux/ducks/cartReducer';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../css/Cart.css';


class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {
        const cartTotal = this.props.total;
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item" key={item.id}>
                            <div className="item-img">
                                <img src={item.image} alt="" width={300}/>
                            </div>

                            <div className="item-desc">
                                <span className="cart-title">{item.title}</span>
                                <p>{item.description}</p>
                                <p><b>Price: ${item.price}</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <p> <b>Total: ${item.quantity*item.price}</b></p>
                                <div className="add-remove">
                                    <button onClick={() => this.handleAddQuantity(item.id)}><FaPlus className="fa-lg"/></button>
                                    <button onClick={() => this.handleSubtractQuantity(item.id)}><FaMinus className="fa-10x"/></button>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => this.handleRemove(item.id)}>Remove</button>
                            </div>
                        </li>
                    )
                })
            ):
            (
                <p>Your bag is empty!</p> 
            )
        return(
            <div className="container">
                <div className="shopping-bag">
                    <h5>Shopping Bag</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <div className="shopping-bag">
                    {cartTotal}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) =>{dispatch(removeItem(id))},
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        subtractQuantity: (id) =>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);