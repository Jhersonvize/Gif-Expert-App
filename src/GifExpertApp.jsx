import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  ////console.log(categories);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    ////console.log(newCategory);
    setCategories([newCategory, ...categories]);
    ////categories.push(newCategory)
    // //setCategories(["Call of duty Coldwar", ...categories]);
    //// console.log("Call of duty Coldwar");
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      <ol>
        {categories.map((category) =>(
           <GifGrid key={category} category={category}/>
          ))
          }
        
      </ol>
    </>
  );
};
