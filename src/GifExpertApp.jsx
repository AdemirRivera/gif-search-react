import { useState } from "react"
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1> GiftExpertApp </h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (<GifGrid key={category} category={category} />))}
        </>
    )
}