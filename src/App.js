import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

// https://youtu.be/YaioUnMw0mo?t=588

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios('https://www.breakingbadapi.com/api/characters');

            setItems(result.data);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    return (
        <div className="container">
            <Header />
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    );
};

export default App;
