import ShelfListItem from "./ShelfListItem";
import useReduxStore from "../../hooks/useReduxStore";
import "./ShelfPage.css"
import { useDispatch } from 'react-redux';

function ShelfList() {
    const store = useReduxStore();

    const tempArray = [
        { id: 1, description: 'Star Wars', image_url: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg'},
        { id: 1, description: 'Star Wars', image_url: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg' },

];

    return (
        <div>
        <p>here is a list</p>
            {/* replace with: store.ItemsList.map */}
            {tempArray.map(item => {
                return (
                    <ShelfListItem key={item.id} item={item} />
                );
            })}
        </div>
    )
}

export default ShelfList;