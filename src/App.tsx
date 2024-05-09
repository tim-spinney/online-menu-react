import './App.css'
// 4. (continued from MenuItem.tsx) import it where we're going to plug it in

import MenuSection from './components/MenuSection'
import { mockData } from './mockData'
import { useState } from 'react'


/* function with CapitalizedName
   returns a single JSX (pseudo-HTML) element
*/
function App() {
  const [itemCount, setItemCount] = useState(0)

  const addItems = (quantity: number) => {
    setItemCount(oldCount => oldCount + quantity)
  }

  return (
    <>
      <nav>
        <h1>SU Bytes</h1>
        <div>
            <span aria-label="shopping cart">
                🛒
            </span>
            <span>
                <span id="item-count">{itemCount}</span> items: <span id="price-total">$0.00</span>
            </span>
        </div>
    </nav>
    <main>
        {mockData.map(
            (menuSectionModel) => <MenuSection data={menuSectionModel} addItems={addItems} />
        )}
        <section>
            <h2>Mains</h2>
            <article>
                <h3>Veggie Burger</h3>
                <div>$13.99</div>
                <input type="number" value="0" />
                <button>Add</button>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.</p>
            </article>
        </section>
    </main>
    </>
  )
}

export default App
