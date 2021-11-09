import React, { useState } from "react";

export const CreateBox = (props) => {
  const [box, setBox] = useState([]);

  const handleChange = (e) => {
      setBox({
          ...box,
          [e.target.name]: e.target.value
          
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setstyle([...props.style, box]);
    console.log(box);
   

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Generador de Caja</h2>
        <label htmlFor="color">Color : </label>
        <input
          type="text"
          id="color"
          name="backgroundColor"
          value={box.backgroundColor}
          onChange={handleChange}
        />
        <label htmlFor="width">Width : </label>
        <input
          type="text"
          id="width"
          name="width"
          value={box.width}
          onChange={handleChange}
        />
        <label htmlFor="height">Height : </label>
        <input
          type="text"
          id="height"
          name="height"
          value={box.height}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Generar Caja
        </button>
        <br />
      </form>
    </>
  );
};