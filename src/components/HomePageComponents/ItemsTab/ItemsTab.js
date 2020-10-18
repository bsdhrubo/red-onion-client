import React, { useState } from 'react';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import FoodItemDetails from '../../FoodDisplay/FoodItemDetails';

const ItemsTab = () => {

    const [tab, setTab] = useState('lunch')
    const [itemClicked, setItemClicked] = useState({})

    const clickedItem =(item)=>{
        setItemClicked(item)
        setIsOpen(true);
    }
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="tab-options text-center mt-5">
                <button onClick={()=>setTab('breakfast')}><span>Breakfast</span></button> &nbsp;&nbsp;&nbsp;
                <button onClick={()=>setTab('lunch')}><span >Lunch</span></button> &nbsp;&nbsp;&nbsp;
                <button onClick={()=>setTab('dinner')}><span>Dinner</span></button>
            </div>
            <div>
                <FoodDisplay clickedItem={clickedItem} tab={tab}/>
                {
                    itemClicked.name
                    &&
                    <FoodItemDetails modalIsOpen={modalIsOpen} closeModal={closeModal} itemData={itemClicked} />
                }
            </div>
        </div>
    );
};

export default ItemsTab;