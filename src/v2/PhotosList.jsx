import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function PhotosList(){
    const { albumId } = useParams();
    const [photoList, setphotoList] = useState([]);

    useEffect(() => {
        // Отримати список альбомів для певного користувача (за userId) з вашого джерела даних
        // Наприклад, зробити запит до API або використовувати локальні дані
        const fetchAlbums = async () => {
            try {
                // Виконати запит до API або отримати альбоми з локальних даних
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
                const data = await response.json();
                setphotoList(data);
            } catch (error) {
                console.error('Помилка при отриманні альбомів:', error);
            }
        };

        fetchAlbums();
    }, [albumId]);

    return (
        <div>
            <h2>Фото альбому користувача:</h2>
            <div className='photo_box'>
                {
                    photoList.map( (e,i) => {
                        return(
                            <img className='photo_item' src={e.url} key={i} alt=""/>
                        )
                    })
                }

            </div>
        </div>
    )
}