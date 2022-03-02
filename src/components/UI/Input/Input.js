import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { isValid, id, label, type, value, onChange, onBlur } = this.props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

export default Input;
