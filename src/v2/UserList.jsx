import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

const UserList = () => {
    const navigate = useNavigate();

    const [usersDataList, setUsersDataList] = useState([]);
    let userReqUrl = 'https://jsonplaceholder.typicode.com/users';
    function sendRequest(url){
        return fetch(url).then( response => {
            return response.json();
        })
    }
    useEffect(() => {
        sendRequest(userReqUrl)
            .then(data => {
                setUsersDataList(data);
            })
    },[])

    const handleAlbumClick = (userId) => {
        navigate(`/albums/${userId}`);
    };

    return (
        <div>
            {usersDataList.map((user) => (
                <div className='user_item' key={user.id}>
                    <h3>{user.name}</h3>
                    <button onClick={() => handleAlbumClick(user.id)}>Albums</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;