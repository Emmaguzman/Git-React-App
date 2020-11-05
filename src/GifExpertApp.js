import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {



    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h2>Gif Expert APP</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ul>
                {categories.map(category => (
                    <GifGrid category={category}
                        key={category}>
                                {category}
                    </GifGrid>
                ))}
            </ul>

        </>
    );
}

