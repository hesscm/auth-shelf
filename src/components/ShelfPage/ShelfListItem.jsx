
import { useDispatch } from 'react-redux';


function ShelfListItem({ item }) {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        console.log('in deleteItem! id:', id)
        dispatch({ type: 'DELETE_ITEM', payload: id }) 
    }
    


    return(
        <div>
        <h3>{item.description}</h3>
        <img src={item.image_url} alt={item.description} />

        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    )
}

export default ShelfListItem;