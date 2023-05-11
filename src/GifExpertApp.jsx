import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  console.log(categories);
  const onAddCategory = () => {
    setCategories(["Call of duty Coldwar", ...categories]);
    console.log("Call of duty Coldwar");
  };
  return (
    <>
      
      <h1>GifExpertApp</h1>
      <AddCategory />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
