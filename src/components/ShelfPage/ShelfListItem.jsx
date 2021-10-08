
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


function ShelfListItem({ item }) {
    const store = useReduxStore();
    const dispatch = useDispatch();
    console.log('userID', store.user.id);

    const deleteItem = (id) => {
        console.log('in deleteItem! id:', id)
        if (store.user.id === item.user_id) {
            dispatch({ type: 'DELETE_ITEM', payload: id })
        } else {
            alert('Bad.')
        }





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