import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Link } from "react-router-dom"


export default function ShoppingCartInfo() {
    const itemCount = useSelector(
        (appState: RootState) => {
            const itemCounts = Object.values(appState.shoppingCart.items)
            let total = 0
            itemCounts.forEach(count => total += count)
            return total
        }
    )
    
    return (
        <div>
            <Link to="/cart">
                <span aria-label="shopping cart">
                    🛒
                </span>
            </Link>
            <span>
                <span id="item-count">{itemCount}</span> items: <span id="price-total">$0.00</span>
            </span>
        </div>
    )
}