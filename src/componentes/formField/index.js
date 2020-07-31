import React from 'react';

const FormField = ({typeTextArea, label, type, name, value, onChange}) => {
    return(
        <div>
            <label>
                {label}: 
                <input 
                    type={type}
                    type={typeTextArea}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}


export default FormField; 