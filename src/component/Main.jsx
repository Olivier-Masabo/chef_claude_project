import { useState } from "react"

 export default function Main(){
   const[ingredients, setIngredients] =useState([])
   const [recipeShown,setRecipeShown] = useState(false)

   const ingredientListItems = ingredients.map(ingredient =>(
      <li className="list-disc" key={ingredient}>{ingredient}</li>
   ))

   function addIngredients(formData){
   
      const newIngredients = formData.get("ingredient")
      setIngredients(prevInput =>[...prevInput,newIngredients])
   }

   function getRecipe(){
    setRecipeShown(prevShown => !prevShown)
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
         { ingredients.length > 0 && <section className="w-[40%] p-6 rounded-xl mt-5 mx-auto">
                <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
                <ul>{ingredientListItems}</ul>
                {ingredients.length > 3 && <div className="flex flex-wrap bg-amber-50 gap-6 p-4 rounded-xl mt-5">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Ready for a recipe?</h3>
                        <p className="text-gray-600">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                    onClick={getRecipe}
                    className="bg-amber-600 p-2 rounded-xl cursor-pointer text-white">Get a recipe</button>
                </div>}
            </section>}
          
          {recipeShown  && <section className="w-[40%] p-6 rounded-xl mt-5 mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-green-700">
        Chef Claude Recommends:
    </h2>

    <article 
        className="bg-gray-50 p-5 rounded-lg shadow-md space-y-4 text-gray-700 leading-relaxed"
        aria-live="polite"
    >
        <p>
            Based on the ingredients you have available, I would recommend making a simple and delicious 
            <strong className="text-red-600"> Beef Bolognese Pasta</strong>.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">
            Beef Bolognese Pasta
        </h3>

        <strong className="block text-lg mt-2 text-green-600">
            Ingredients:
        </strong>

        <ul className="list-disc list-inside space-y-1">
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice</li>
        </ul>

        <strong className="block text-lg mt-4 text-green-600">
            Instructions:
        </strong>

        <ol className="list-decimal list-inside space-y-2">
            <li>Bring a large pot of salted water to a boil.</li>
            <li>Cook the ground beef until browned.</li>
            <li>Add onion and garlic. Cook until soft.</li>
            <li>Stir in tomato paste.</li>
            <li>Add tomatoes, broth, and spices.</li>
            <li>Simmer 15–20 minutes.</li>
            <li>Cook pasta separately.</li>
            <li>Mix pasta with sauce.</li>
            <li>Serve hot.</li>
        </ol>
    </article>
</section>
}
            
       </main>
    )
 }