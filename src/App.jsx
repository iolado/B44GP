import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import { recipes } from "./data/recipes";

/*
`App` is the main function for the recipe app.

Think of this like the "team leader" of the page:
- It remembers what the user typed in the search box.
- It remembers which recipe is currently selected.
- It decides which recipes should be shown.
- It sends the right information to smaller parts like `RecipeCard`
  and `RecipeDetail`.
*/
function App() {
  /*
  `recipeList` is the list the app can change while it is running.
  We start with the sample recipes, but now the user can add new ones
  or remove existing ones.
  */
  const [recipeList, setRecipeList] = useState(recipes);

  /*
  `searchTerm` stores the words typed by the user.
  `setSearchTerm` updates that value whenever the user types.
  */
  const [searchTerm, setSearchTerm] = useState("");

  /*
  `selectedRecipeId` stores the id number of the recipe the user clicked.
  We start by choosing the first recipe so the detail panel is not empty.
  */
  const [selectedRecipeId, setSelectedRecipeId] = useState(recipes[0]?.id ?? null);

  /*
  `newRecipe` stores the text inside the add-recipe form.
  This lets the app build a brand-new recipe from what the user types.
  */
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    time: "",
    difficulty: "Easy",
    servings: "4",
    tags: "",
    ingredients: "",
    steps: "",
  });

  /*
  This makes a smaller list called `filteredRecipes`.

  For each recipe:
  - turn the search words into lowercase
  - check if the title matches
  - check if the description matches
  - check if any tag matches

  If any of those are true, the recipe stays in the list.
  */
  const filteredRecipes = recipeList.filter((recipe) => {
    const query = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  /*
  This picks the recipe to show on the right side.

  First, it tries to find the recipe the user selected.
  If that recipe is missing because of search results, it shows the first
  recipe in the filtered list instead.
  If the list is empty, it uses `null`, which means "nothing selected."
  */
  const selectedRecipe =
    filteredRecipes.find((recipe) => recipe.id === selectedRecipeId) ?? filteredRecipes[0] ?? null;

  /*
  This updates one field inside the add-recipe form.

  Example:
  - if the user types into the title box, only the `title` part changes
  - the rest of the form stays the same
  */
  function handleNewRecipeChange(event) {
    const { name, value } = event.target;
    setNewRecipe((currentRecipe) => ({
      ...currentRecipe,
      [name]: value,
    }));
  }

  /*
  This runs when the add-recipe form is submitted.

  It:
  - stops the page from refreshing
  - turns comma-separated text into lists
  - creates a new recipe object
  - adds the new recipe to the list
  - selects the new recipe so the user can see it right away
  - clears the form for the next entry
  */
  function handleAddRecipe(event) {
    event.preventDefault();

    const tags = newRecipe.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const ingredients = newRecipe.ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);
    const steps = newRecipe.steps
      .split("\n")
      .map((step) => step.trim())
      .filter(Boolean);

    const recipeToAdd = {
      id: Date.now(),
      title: newRecipe.title.trim(),
      description: newRecipe.description.trim(),
      time: newRecipe.time.trim(),
      difficulty: newRecipe.difficulty,
      servings: Number(newRecipe.servings) || 1,
      tags,
      ingredients,
      steps,
    };

    setRecipeList((currentRecipes) => [...currentRecipes, recipeToAdd]);
    setSelectedRecipeId(recipeToAdd.id);
    setNewRecipe({
      title: "",
      description: "",
      time: "",
      difficulty: "Easy",
      servings: "4",
      tags: "",
      ingredients: "",
      steps: "",
    });
  }

  /*
  This removes one recipe from the list.

  After deleting:
  - the recipe disappears from the cards
  - if it was selected, the app picks another recipe if one exists
  */
  function handleDeleteRecipe(recipeId) {
    const remainingRecipes = recipeList.filter((recipe) => recipe.id !== recipeId);
    setRecipeList(remainingRecipes);

    if (selectedRecipeId === recipeId) {
      setSelectedRecipeId(remainingRecipes[0]?.id ?? null);
    }
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">B44GP Recipe App</p>
          <h1>Simple recipes you can actually make.</h1>
          <p className="hero-copy">
            Browse a small collection of recipe ideas, search by keyword, and open a detail card for
            ingredients and steps.
          </p>
        </div>

        <label className="search-panel">
          <span>Search recipes</span>
          <input
            type="search"
            placeholder="Try pasta, chicken, breakfast..."
            value={searchTerm}
            /*
            When the user types, this runs right away.
            It grabs the new text from the input box and saves it into state.
            That causes React to update the page with matching recipes.
            */
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
      </header>

      <main className="content-grid">
        <section>
          <form className="add-recipe-form" onSubmit={handleAddRecipe}>
            <div className="section-heading">
              <h2>Add Recipe</h2>
              <p>Create your own recipe card.</p>
            </div>

            <div className="form-grid">
              <label>
                <span>Title</span>
                <input name="title" value={newRecipe.title} onChange={handleNewRecipeChange} required />
              </label>

              <label>
                <span>Cook time</span>
                <input
                  name="time"
                  value={newRecipe.time}
                  onChange={handleNewRecipeChange}
                  placeholder="25 minutes"
                  required
                />
              </label>

              <label className="full-width">
                <span>Description</span>
                <input
                  name="description"
                  value={newRecipe.description}
                  onChange={handleNewRecipeChange}
                  placeholder="Short summary of the recipe"
                  required
                />
              </label>

              <label>
                <span>Difficulty</span>
                <select name="difficulty" value={newRecipe.difficulty} onChange={handleNewRecipeChange}>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>

              <label>
                <span>Servings</span>
                <input
                  name="servings"
                  type="number"
                  min="1"
                  value={newRecipe.servings}
                  onChange={handleNewRecipeChange}
                  required
                />
              </label>

              <label className="full-width">
                <span>Tags</span>
                <input
                  name="tags"
                  value={newRecipe.tags}
                  onChange={handleNewRecipeChange}
                  placeholder="Dinner, Pasta, Quick"
                />
              </label>

              <label className="full-width">
                <span>Ingredients (one per line)</span>
                <textarea
                  name="ingredients"
                  value={newRecipe.ingredients}
                  onChange={handleNewRecipeChange}
                  rows="5"
                  required
                />
              </label>

              <label className="full-width">
                <span>Steps (one per line)</span>
                <textarea
                  name="steps"
                  value={newRecipe.steps}
                  onChange={handleNewRecipeChange}
                  rows="5"
                  required
                />
              </label>
            </div>

            <button className="primary-button" type="submit">
              Add Recipe
            </button>
          </form>

          <div className="section-heading">
            <h2>Recipe List</h2>
            <p>{filteredRecipes.length} recipe(s)</p>
          </div>

          <div className="recipe-grid">
            {/* This goes through every matching recipe and builds one card for each one. */}
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isSelected={selectedRecipe?.id === recipe.id}
                /*
                When a card is clicked, we save that recipe's id.
                Then React updates the detail panel to show that recipe.
                */
                onSelect={() => setSelectedRecipeId(recipe.id)}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="empty-state">
              <h3>No recipes found</h3>
              <p>Try a different keyword or clear the search box.</p>
            </div>
          ) : null}
        </section>

        <aside>
          <div className="section-heading">
            <h2>Recipe Detail</h2>
            <p>Select a recipe to view full instructions.</p>
          </div>
          <RecipeDetail recipe={selectedRecipe} />
          {selectedRecipe ? (
            <button
              className="danger-button"
              type="button"
              onClick={() => handleDeleteRecipe(selectedRecipe.id)}
            >
              Remove This Recipe
            </button>
          ) : null}
        </aside>
      </main>
    </div>
  );
}

export default App;
