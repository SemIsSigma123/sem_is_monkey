import React from "react";

export default function AddColor({ array, setArray }) {
    function addColor() {
        setArray([...array, {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
        }]);
    }

    return (
        <button onClick={addColor}>Add random color</button>
    )
}
