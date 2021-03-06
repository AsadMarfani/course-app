import React from 'react';

const TextInput = ({name, label, value, error, onChange, placeholder}) => {
    let wrapperClass = "form-group";
    if(error && error.length > 0) {
        wrapperClass += " " + "has-error"
    }
    return(
        <div className = {wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text"
                    name = {name}
                    placeholder = {placeholder}
                    className = "form-control"
                    value = {value}
                    onChange = {onChange}/>
                {error && <div className = "alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default TextInput