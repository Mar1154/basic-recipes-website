import React, { useState } from 'react';
import "./styles/tabs.css";

export function Tabs(props) {
    const { selectedTab, setSelectedTab, setFilteredRecipes, recipes, filteredRecipes } = props; // Pass filteredRecipes as a prop
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        'All', 
        'Breakfast', 
        'Lunch', 
        'Dinner', 
        'Snack',
        'Dessert',
        'Beverage',
        'Appetizer',
        'Side Dish'
    ];

    const handleSearch = () => {
        const filtered = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    return (
        <nav className="tab-container">      
            <div className="tab-list">
                <div className="filter-icon-container">
                    <span className="material-symbols-outlined">
                        filter_list
                    </span>
                </div>

                <div className="dropdown-container">
                    <select
                        id="tab-dropdown"
                        className="tab-dropdown"
                        value={selectedTab}
                        onChange={(e) => setSelectedTab(e.target.value)}
                    >
                        {tabs.map((tab, tabIndex) => {
                            const numOfRecipes = tab === 'All'
                                ? filteredRecipes.length
                                : filteredRecipes.filter(recipe => recipe.mealType.includes(tab)).length;

                            return (
                                <option key={tabIndex} value={tab} className="tab-option">
                                    {tab} ({numOfRecipes})
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search recipes"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
        </nav>
    );
}
