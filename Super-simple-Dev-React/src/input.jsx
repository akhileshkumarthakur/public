import React from "react";

function InputBox () {


    return (
        <>
            <input style={{
                padding: '8px 14px', 
                borderRadius: '4px',
                marginRight: '8px'
                }} type="text" placeholder="Search...." />
            <button style={{
                padding: '8px 14px', 
                borderRadius: '4px',
                marginRight: '8px',
                cursor: 'pointer'
            }}>Submit</button>
        </>
    )
};

export default InputBox