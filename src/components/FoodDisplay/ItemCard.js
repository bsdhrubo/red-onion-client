import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ itemData , showDetails }) => {
    return (
        <div>
            <Link onClick={()=>showDetails(itemData)} to='#'>
                <div className="card text-center">
                    <img src={itemData.image} alt="" height="50" /> <br />
                    <p>{itemData.name}</p>
                    <span>{itemData.price}</span>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;