import './styles/card.css'
import './styles/button.css'

export function RecipeCard(props) {
    const { recipe } = props

    return (
        <div className="card recipe-card">
            <div className="card-img">
                <img src={recipe.image} alt={recipe.name}/>
            </div>
            <div className="card-content">
                <h3>{recipe.name}</h3>

                <div className="recipe-card-body">
                    <p><span className="material-symbols-outlined">
                            menu_book
                        </span>
                        {recipe.mealType.join(', ')}
                    </p>
                    <p><span className="material-symbols-outlined">
                            timer
                        </span>
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                    </p>
                    <p>
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        {recipe.rating}
                    </p>
                </div>

            </div>
        </div>
    )
}