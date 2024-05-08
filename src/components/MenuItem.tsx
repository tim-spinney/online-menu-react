import {MenuItem as MenuItemModel} from '../model/MenuItem'

interface MenuItemProps {
    data: MenuItemModel
}

// 1. function with a capitalized name
function MenuItem(props: MenuItemProps) {
    const data = props.data
    // 2. return a JSX element
    return (
        <article>
            <h3>{data.name}</h3>
            <div className="price">${data.price}</div>
            <input type="number" value="0" />
            <button>Add</button>
            <p>{data.description}</p>
        </article>
    )
}
// 3. make it usable elsewhere
export default MenuItem