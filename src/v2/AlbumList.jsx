import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Albums = () => {

    const navigate = useNavigate();

    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error('Помилка при отриманні альбомів:', error);
            }
        };

        fetchAlbums();
    }, [userId]);


    const handleAlbumClick = (albumId) => {
        navigate(`/photos/${albumId}`);
    };

    return (
        <div>
            <h2>Список альбомів користувача {userId}:</h2>
            <ul>
                {albums.map((album) => (
                    <div className='user_item album'>
                    <li key={album.id}>{album.title}</li>
                        <button onClick={() => handleAlbumClick(album.id)}>Photos</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
