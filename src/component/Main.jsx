import { useState } from "react"

 export default function Main(){
   const[ingredients, setIngredients] =useState([])

   const ingredientListItems = ingredients.map(ingredient =>(
      <li className="list-disc" key={ingredient}>{ingredient}</li>
   ))

   function addIngredients(formData){
   
      const newIngredients = formData.get("ingredient")
      setIngredients(prevInput =>[...prevInput,newIngredients])
   }

    return(
       
       <main>
        <form 
        action={addIngredients}
        className="flex flex-wrap items-center justify-center mt-8" 
      >

            <input
             type="text" 
             className="border p-2 rounded-lg w-[25%] outline-0 border-gray-400 shadow-gray-400 shadow-md" 
             placeholder="E.g: fish"
             name="ingredient" />

            <button 
            className="border-2 p-2 rounded-lg text-white bg-black cursor-pointer sm:text-sm">+ Add ingredient</button>
        </form>

        <ul className="w-[30%] mx-auto">
         {ingredientListItems}
        </ul>
       </main>
    )
 }