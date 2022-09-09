import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// no se ponen funciones dentro del functional component dado que al renderizar el componente, se vuelve a ejecutar la funcion

// useEffect sirve para disparar efectos secundarios (proceso que se quiere ejecutar cuando algo suceda)

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs (category);
    console.log({isLoading});

    return (
        <>
            <h2>{category}</h2>

            {
                isLoading
                && (<h1>Cargando...</h1>)
                // CONDICION SIN FALSE
            }

            <div className='card-grid'>
                {images.map( image => (
                    <GifItem 
                        key={image.id}
                        { ...image }
                        // para que el componente hijo reciba todos los datos del objeto como propiedades
                    />
                ))}
                
            </div>
        </>
    )
}
