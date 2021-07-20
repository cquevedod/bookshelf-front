import React, { useState } from "react"
import { useField } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Input({ className, placeholder, icon, ...props }) {

    const [focused, setFocused] = useState(false)
    const [field, meta] = useField(props)
    const { onBlur, value } = field;

    function handleFocus() {
        setFocused(true)
    }

    function handleBlur(e) {
        if (value.length === 0) {
            setFocused(false)
        }
        onBlur(e)
    }

    function addFocusClass() {
        return focused || value.length > 0 ? "focus" : ""
    }

    return (
        <div className={`input-container ${className} ${addFocusClass()}`}>
            <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={icon} />
            </div>
            <div className="input-textfield">
                <h5 htmlFor={field.name}>{placeholder}</h5>
                <input
                    {...field} {...props}
                    onFocus={handleFocus}
                    onBlur={e => handleBlur(e)}
                />
            </div>

        </div>
    )
};

export default Input
