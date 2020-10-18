import React from 'react';
import Modal from 'react-modal';
import { addToDatabaseCart, getDatabaseCart } from '../../DatabaseManager/DatabaseManager';


const FoodItemDetails = ({ modalIsOpen, closeModal, itemData }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    Modal.setAppElement('#root')


    // useful and important function to handle add to cart
    const handleAddToCart = (id) => {
        const currentCart = getDatabaseCart()
        const allCartKeyArray = Object.keys(currentCart)

        if (allCartKeyArray.length > 0) {
            const getExistedId = allCartKeyArray.find(each => each === id)
            if(getExistedId){
                const newCount = parseInt(currentCart[getExistedId])+1;
                addToDatabaseCart(id,newCount);
            }else{
                addToDatabaseCart(id,1);
            }
        } else {
            addToDatabaseCart(id,1);
        }
        console.log(getDatabaseCart())
    }

    return (
        <div className="">

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>

                <div className="row">
                    <div className="col-6">
                        <br />
                        <h3>{itemData.name}</h3>
                        <p>{itemData.details}</p>
                        <h1>${itemData.price}</h1>
                        <button onClick={() => handleAddToCart(itemData._id)} className="button">Add to Cart</button>
                        <br />

                        {/* <div style={{height:'130px', width:'300px', overflow:'auto'}}>
                        <SameCategory category={item.category}/>
                        </div> */}
                    </div>
                    <div className="col-6">
                        <img src={itemData.image} alt="" />
                    </div>
                </div>

            </Modal>


        </div>
    );
};

export default FoodItemDetails;