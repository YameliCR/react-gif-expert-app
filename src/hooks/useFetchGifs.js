import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    // un hook es una función que regresa algo

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }


    // se tiene 2 argumentos --> una función callback y una lista de dependencias (condiciones con las que se volveria a ejecutar el callback)
    useEffect(() => {
        // no permite los async
        // getGifs(category)
        //     .then( newImages => setImages(newImages));
        getImages();
    }, [])
    // si se deja las dependencias vacias, se ejecutara solo una vez cuando se construye el componente
    // el retorno es mas para realizar una limpieza
    
    return {
        images: images,
        isLoading
    }
}
