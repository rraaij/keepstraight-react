import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>Good to see you</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change!</button>
    </div>
  );
};
export default Greeting;
