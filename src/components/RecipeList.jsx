import { RecipeCard } from './RecipeCard';
import { Loading } from './Loading';

export function RecipeList(props) {
    const { selectedTab, recipes, loading } = props;

    const filterRecipeList = selectedTab === 'All'
        ? recipes
        : recipes.filter(recipe => recipe.mealType.includes(selectedTab));

    return (
        <div className="recipe-list">
            {loading ? (
                <Loading />
            ) : filterRecipeList.length === 0 ? (
                <div className="no-results">
                    <p>No results found.</p>
                </div>
            ) : (
                <div className="recipe-cards">
                    {filterRecipeList.map((recipe, recipeIndex) => (
                        <RecipeCard 
                            key={recipeIndex}
                            recipe={recipe}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
