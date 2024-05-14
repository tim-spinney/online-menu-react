import { useSelector } from "react-redux"
import { RootState } from "../store"


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
            <span aria-label="shopping cart">
                🛒
            </span>
            <span>
                <span id="item-count">{itemCount}</span> items: <span id="price-total">$0.00</span>
            </span>
        </div>
    )
}