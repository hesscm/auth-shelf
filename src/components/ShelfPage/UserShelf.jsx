import { useSelector, dispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // ??
import { useEffect } from 'react';
import UserShelfItem from './UserShelfItem';


function ShelfPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store); //??

    
    const { id } = useParams(); //??

    useEffect(() => {
        dispatch({ type: "GET_USER_SHELF", payload: { id: id } }) // ??
    }, [dispatch])


    return (
        <div className="item">
            {/* {JSON.stringify(store.items.ItemsList)} */}
            <br /> <br />
            {/* {JSON.stringify(tempArray)} */}
            {/* replace with: store.ItemsList.map */}
            {store.items.ItemsList.map(item => {
                return (
                    <UserShelfItem key={item.id} item={item} />
                );
            })}
            <button onClick={handleClickEvent}>My Shelf</button>
        </div>
    )
}

export default ShelfPage;