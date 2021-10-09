import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // ??
import { useEffect } from 'react';
import UserShelfItem from './UserShelfItem';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';


function UserShelfPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore(); //this was named wrong originally too. useReduxStore never imported

   //---------------------------------------
    //this is an alternative way to do the below. We're not actually using this right now
    const allParams = useParams();
    const userID = allParams.id; 
    
    const { id } = useParams(); //same as: id = allParams.id; We are using this
    //--------------------------------------
    useEffect(() => { //dispatch the user ID with this type(GO TO BOTTOM OF SHELF.SAGA)
        dispatch({ type: "GET_USER_SHELF", payload: { id: id } })
    }, [id]) //this allows adjusting the URL to act as expected. ex: user/2 to user/3 



    //IF YOU JUST CAME FROM THE REDUCER, THE STORE IS NOW LOADED.
    //One last thing about the delete in UserShelfItem...
    return (
        <div className="item">
            <h1>USER SHELF</h1>
            {JSON.stringify(allParams)}
            <br /> <br />
            {/*store variable name|what we called it in root.reducer|reducer function name in shelf.reducer */}
            {store.items.UserItemsList.map(item => { //map over the items list for the specific user
                return (
                    <UserShelfItem key={item.id} item={item} />
                );
            })}
        </div>
    )
}

export default UserShelfPage;