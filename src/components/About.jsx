import './styles/About.css';

export function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <p>
                This basic website offers a collection of recipes across various meal 
                categories. It allows users to browse and add different types of recipes.
                <br/><br/>
                Built with React, the initial recipe data is provided through an API 
                created by Muhammad Ovi, and the loading animation was designed by 
                John Kantner.
            </p>
        </div>
    )
}