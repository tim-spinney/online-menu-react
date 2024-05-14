import { useState } from 'react'
import {MenuItem as MenuItemModel} from '../model/MenuItem'
import { useDispatch } from 'react-redux'
import { addItem } from '../shoppingCartSlice'

interface MenuItemProps {
    data: MenuItemModel
}

// 1. function with a capitalized name
function MenuItem(props: MenuItemProps) {
    const [quantity, setQuantity] = useState(0)
    const data = props.data
    const dispatch = useDispatch()

    const quantityChanged = (event: any) => {
        const newQuantity = parseInt(event.target.value)
        if(!isNaN(newQuantity)) {
            setQuantity(newQuantity)
        }
    }

    const addClicked = () => {
        const action = addItem({ itemName: data.name, quantity })
        dispatch(action)
        setQuantity(0)
    }

    // 2. return a JSX element
    return (
        <article className="menu-item">
            <h3>{data.name}</h3>
            <div className="price">${data.price}</div>
            <input type="number" value={quantity} onChange={quantityChanged} />
            <button onClick={addClicked}>Add</button>
            <p>{data.description}</p>
        </article>
    )
}
// 3. make it usable elsewhere
export default MenuItem