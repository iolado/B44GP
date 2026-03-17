/*
This file is not a function file.
It is a data file that stores our sample recipes in a list.

Each recipe object has:
- an `id` so React can tell recipes apart
- text like `title` and `description`
- labels like `tags`
- lists for `ingredients` and `steps`

The app imports this file and uses the data to build the screen.
*/
export const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "A fast weeknight pasta with garlic, parmesan, and spinach.",
    time: "20 minutes",
    difficulty: "Easy",
    servings: 4,
    tags: ["Pasta", "Vegetarian", "Dinner"],
    ingredients: [
      "8 oz pasta",
      "2 tbsp butter",
      "3 garlic cloves, minced",
      "1 cup heavy cream",
      "1/2 cup grated parmesan",
      "2 cups spinach",
      "Salt and black pepper",
    ],
    steps: [
      "Cook pasta according to package directions and reserve a little pasta water.",
      "Melt butter in a pan and cook garlic for 30 seconds.",
      "Stir in cream and parmesan, then simmer until smooth.",
      "Add spinach and cooked pasta, tossing until coated.",
      "Season to taste and loosen with pasta water if needed.",
    ],
  },
  {
    id: 2,
    title: "Honey Lemon Chicken",
    description: "Pan-seared chicken breast finished with a sweet and tangy glaze.",
    time: "30 minutes",
    difficulty: "Medium",
    servings: 4,
    tags: ["Chicken", "Dinner", "High Protein"],
    ingredients: [
      "4 chicken breasts",
      "1 tbsp olive oil",
      "2 tbsp honey",
      "2 tbsp lemon juice",
      "1 tsp paprika",
      "2 garlic cloves, minced",
      "Salt and black pepper",
    ],
    steps: [
      "Season chicken with paprika, salt, and pepper.",
      "Sear chicken in olive oil until golden on both sides.",
      "Mix honey, lemon juice, and garlic in a small bowl.",
      "Pour sauce into the pan and cook until the chicken is glazed and cooked through.",
      "Rest for a few minutes before serving.",
    ],
  },
  {
    id: 3,
    title: "Berry Yogurt Parfait",
    description: "A fresh breakfast layered with yogurt, fruit, and crunchy granola.",
    time: "10 minutes",
    difficulty: "Easy",
    servings: 2,
    tags: ["Breakfast", "No Cook", "Healthy"],
    ingredients: [
      "2 cups Greek yogurt",
      "1 cup mixed berries",
      "1 cup granola",
      "1 tbsp honey",
      "Fresh mint",
    ],
    steps: [
      "Spoon yogurt into two serving glasses.",
      "Add a layer of berries and granola.",
      "Repeat the layers until the glasses are full.",
      "Finish with honey and fresh mint before serving.",
    ],
  },
  {
    id: 4,
    title: "Veggie Fried Rice",
    description: "A simple one-pan rice dish packed with vegetables and soy flavor.",
    time: "25 minutes",
    difficulty: "Easy",
    servings: 4,
    tags: ["Rice", "Vegetarian", "Lunch"],
    ingredients: [
      "3 cups cooked rice",
      "1 tbsp sesame oil",
      "2 eggs, beaten",
      "1 cup mixed vegetables",
      "2 tbsp soy sauce",
      "2 green onions, sliced",
      "1 tsp grated ginger",
    ],
    steps: [
      "Scramble eggs in a hot pan and set aside.",
      "Add sesame oil, ginger, and mixed vegetables to the pan.",
      "Stir in cooked rice and soy sauce.",
      "Return eggs to the pan and mix well.",
      "Top with green onions and serve hot.",
    ],
  },
];
