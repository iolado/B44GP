/*
`RecipeDetail` shows the full information for one recipe.

If no recipe is chosen, it shows a friendly message instead.
If a recipe exists, it displays:
- the title
- the description
- time and difficulty
- ingredients
- step-by-step directions
*/
function RecipeDetail({ recipe }) {
  if (!recipe) {
    return (
      <div className="detail-card empty-detail">
        <h3>No recipe selected</h3>
        <p>Choose a recipe from the list to see ingredients and preparation steps.</p>
      </div>
    );
  }

  return (
    <article className="detail-card">
      <div className="detail-hero">
        <div>
          <p className="eyebrow">Featured Recipe</p>
          <h3>{recipe.title}</h3>
        </div>
        <span>{recipe.servings} servings</span>
      </div>

      <p className="detail-description">{recipe.description}</p>

      <div className="detail-meta">
        <div>
          <strong>Cook time</strong>
          <p>{recipe.time}</p>
        </div>
        <div>
          <strong>Difficulty</strong>
          <p>{recipe.difficulty}</p>
        </div>
      </div>

      <section>
        <h4>Ingredients</h4>
        <ul>
          {/* This makes one bullet point for each ingredient in the recipe. */}
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Steps</h4>
        <ol>
          {/* This makes an ordered list so the cooking steps stay in the correct order. */}
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}

export default RecipeDetail;
