import React, { useRef } from 'react';

function LocalStorage() {
    const data = useRef();
    
    const handleClick = () => {
        const inputValue = data.current.value;
        localStorage.setItem("inputValue", inputValue);
        console.log(inputValue, "stored in local storage");
    }

    return (
        <>
            <input ref={data} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}

export default LocalStorage;