import React, { useState, useEffect } from "react";
import InputHints from "react-input-hints";

const Input = () => {
  const [Placeholder, setPlaceholder] = useState([
    "ENTER YOUR SCHOLL UDISE CODE",
    "अपना स्कूल यूडीज़ कोड एंटर करें",
  ]);

  return (
    <>
      <InputHints
        onFocus={(e) => {
          setPlaceholder(["", ""]);
        }}
        onBlur={(e) => {
          setPlaceholder([
            "ENTER YOUR SCHOLL UDISE CODE",
            "अपना स्कूल यूडीज़ कोड एंटर करें",
          ]);
        }}
        style={{ height: "38px", padding: "5px", width: "89.5%" }}
        placeholders={Placeholder}
      />
    </>
  );
};
export default Input;
