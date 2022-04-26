import React, {Component} from "react";
import productArray from "./productArray";
import '../css/Home.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from '../redux/ducks/cartReducer';
import { FaPlus } from 'react-icons/fa';



class ProductTile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src = {productArray[this.state.id].image} alt="Placeholder image" width={250} height={300}></img>
                        <button onClick={() => {this.handleClick(this.state.id)}}><FaPlus/></button>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="card-title">{productArray[this.state.id].title}</p>
                    <a className="more-button" target="_blank">
                        <Link to={`/product/${this.state.id}`}>More Details</Link>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductTile);