
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


function UserShelfItem({ item }) {
    const store = useReduxStore();
    const dispatch = useDispatch();
    console.log('userID', store.user.id);

    const deleteItem = (id) => {
        console.log('in deleteItem! id:', id)
        if (store.user.id === item.user_id) {
            //delete the item. payload has the item id and the current user_id to check for verification
            dispatch({ type: 'DELETE_ITEM', payload: { id: id, user_id: item.user_id } })
            //after the delete is called, reload the DOM. Need to send the user id here
            dispatch({ type: "GET_USER_SHELF", payload: { id: store.user.id } })
        } else {
            alert('Bad.')
        }
    }

    return (
        <div>
            <h3>{item.description}</h3>
            <img src={item.image_url} alt={item.description} />

            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    )
}

export default UserShelfItem;