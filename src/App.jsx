import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tabs } from './components/Tabs';
import { RecipeList } from './components/RecipeList';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';
import { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);  
  const [filteredRecipes, setFilteredRecipes] = useState([]); 
  const [selectedTab, setSelectedTab] = useState('All');  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return res.json();
      })
      .then(data => {
        setRecipes(data.recipes); 
        setFilteredRecipes(data.recipes); 
        setLoading(false);
      })
      .catch(error => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
        <Loading/>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="recipes">
        <Tabs 
            selectedTab={selectedTab} 
            setSelectedTab={setSelectedTab} 
            setFilteredRecipes={setFilteredRecipes} 
            recipes={recipes} 
            filteredRecipes={filteredRecipes} 
        />
        <RecipeList 
          selectedTab={selectedTab} 
          recipes={filteredRecipes} 
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
