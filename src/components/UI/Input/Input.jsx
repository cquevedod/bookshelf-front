import React, { useState } from "react"
import { useField } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./Input.scss";

function Input({ styleName, placeholder, icon, setErrors, ...props }) {

    const [focused, setFocused] = useState(false)
    const [field, meta] = useField(props)
    const { onBlur, onChange, value } = field;

    function handleFocus() {
        setFocused(true)
    }

    function handleBlur(event) {
        if (value.length === 0) {
            setFocused(false)
        }
        onBlur(event)
    }

    function handleChange(event, error) {
        if (error) {
            setErrors(error)
        }
        onChange(event)
    }

    function addFocusClass() {
        return focused || value.length > 0 ? "focus" : ""
    }

    return (
        <div className={`input-container ${styleName} ${addFocusClass()}`}>
            <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={icon} />
            </div>
            <div className="input-textfield">
                <h5 className="placeholder" htmlFor={field.name}>{placeholder}</h5>
                <input
                    {...field} {...props}
                    onFocus={handleFocus}
                    onBlur={e => handleBlur(e)}
                    onChange={e => handleChange(e, meta['error'])}
                />
                {meta.error && meta.touched ? (
                    <div className="errors">
                        <FontAwesomeIcon
                            className="icon-error"
                            icon={faExclamationCircle}
                        />
                        {meta.error}
                    </div>
                ) : null}
            </div>

        </div>
    )
};

export default Input
