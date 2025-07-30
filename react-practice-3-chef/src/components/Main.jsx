import { useState, useRef, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromMistral } from '../ai'

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');

    const recipeSection = useRef(null);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function showRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    useEffect(() => {
        if(recipe !== '' && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior:'smooth'})
        }
    }, [recipe]);

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} showRecipe={showRecipe} ref={recipeSection} />
                : null}
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}