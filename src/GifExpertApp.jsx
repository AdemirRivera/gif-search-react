import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = () => {
        setCategories(cat => [...cat, "Valorant"])
    }

    return (
        <>
            { /* titulo */}
            <h1> GiftExpertApp </h1>

            { /* input */}
            <AddCategory setCategories={setCategories} />

            { /* listado de gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}> {category} </li>
                })}
            </ol>

            { /* gif item */}
        </>
    )
}