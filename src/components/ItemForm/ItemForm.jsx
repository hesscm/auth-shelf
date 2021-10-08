import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Create a form for users to add a new item to the shelf
function ItemForm() {
    // create a variable to hold user inputs
    // default state is an object with empty strings
    const [newItem, setNewItem] = useState({
        description:'',
        image_url:'',
    });

    // allows sending of data to the saga function
    const dispatch = useDispatch();

    // calls the saga function
    // sends the new item information
    // resets the form information 
    const addNewItem = () => {
        dispatch({
            type: 'ADD_ITEM', payload: newItem
        });
        setNewItem('');
    }

    return (
        <>
        <form onSubmit={addNewItem}>
            {/* inputs for newItem object
            sets values on change
            on button click call the addNewItem
            to send to the saga function */}
        <input 
        type='text' 
        value={newItem.description} 
        placeholder='description' 
        onChange={(event) => setNewItem({...newItem, description: event.target.value})}/>
        <br />
        <input 
        type='text' 
        value={newItem.image_url} 
        placeholder='image_url' 
        onChange={(event) => setNewItem({...newItem, image_url: event.target.value})}/>
        <br />
        <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default ItemForm;