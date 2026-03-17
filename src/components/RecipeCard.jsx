/*
`RecipeCard` shows a short preview of one recipe.

It gets three pieces of information:
- `recipe`: the recipe data to display
- `isSelected`: tells us if this card is the one currently chosen
- `onSelect`: a function to run when the card is clicked

This component is like a clickable button version of a recipe summary card.
*/
function RecipeCard({ recipe, isSelected, onSelect }) {
  return (
    <button className={`recipe-card ${isSelected ? "selected" : ""}`} onClick={onSelect} type="button">
      <div className="recipe-card-top">
        <p className="recipe-time">{recipe.time}</p>
        <p className="recipe-difficulty">{recipe.difficulty}</p>
      </div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <div className="tag-list">
        {/* This loops through the tags and shows each one as a small label. */}
        {recipe.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );
}

export default RecipeCard;
