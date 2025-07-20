import { useState } from 'react';

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function submitForm(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form
                className="add-ingredient-form"
                action={submitForm}>
                <input
                    aria-label="Add ingedient"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}