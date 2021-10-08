import ShelfListItem from "./ShelfListItem";
import useReduxStore from "../../hooks/useReduxStore";
import "./ShelfPage.css"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ShelfList() {
    const dispatch = useDispatch();
    const store = useReduxStore();
    const tempArray = [
        { id: 1, description: 'Star Wars', image_url: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg'},
        { id: 2, description: 'Star Wars', image_url: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg' },

];

const fetchList = () => {
    dispatch({type: "FETCH_SHELF"})
}


useEffect(() => {
    dispatch({ type: "FETCH_SHELF" })
}, [dispatch])


    return (
        <div className="item">
            {/* {JSON.stringify(store.items.ItemsList)} */}
            <br /> <br />
            {/* {JSON.stringify(tempArray)} */}
            {/* replace with: store.ItemsList.map */}
            {store.items.ItemsList.map(item => {
                return (
                    <ShelfListItem key={item.id} item={item} />
                );
            })}
        </div>
    )
}

export default ShelfList;