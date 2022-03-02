import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
<<<<<<< HEAD
  const { isValid, id, label, type, value, onChange, onBlur } = this.props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));
=======
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
>>>>>>> effects

  return (
    <div
      className={`${classes.control} ${
<<<<<<< HEAD
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
=======
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
>>>>>>> effects
      />
    </div>
  );
});

export default Input;
