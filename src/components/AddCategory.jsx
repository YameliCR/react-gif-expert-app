import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <=1) return;
        // trim: elimina los espacios en blanco de ambos extremos del string

        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscarg gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
        // onChange={(event) => onInputChange(event)}
    )
}
