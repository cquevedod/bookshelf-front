import React, { useState, forwardRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Input({ containerClass, placeholder, inputType, icon }, ref) {

    const [focused, setFocused] = useState(false)

    function onFocus() {
        setFocused(true)
    }

    function onBlur() {
        console.log(typeof ref.current.value)
        if (ref.current.value.length === 0) setFocused(false)
    }

    function addFocusClass() {
        return focused || ref.current?.value.length > 0 ? "focus" : ""
    }

    return (
        <div className={`input-container ${containerClass} ${addFocusClass()}`}>
            <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={icon} />
            </div>
            <div className="input-textfield">
                <h5>{placeholder}</h5>
                <input type={inputType}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={ref}
                    required
                />
            </div>

        </div>
    )
};

export default forwardRef(Input)
