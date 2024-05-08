import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 4. (continued from MenuItem.tsx) import it where we're going to plug it in

import MenuSection from './components/MenuSection'
import { mockData } from './mockData'


/* function with CapitalizedName
   returns a single JSX (pseudo-HTML) element
*/
function App() {
  return (
    <>
      <nav>
        <div aria-label="shopping cart">
            🛒
        </div>
        <div>
            <span id="item-count">0</span> items: <span id="price-total">$0.00</span>
        </div>
    </nav>
    <main>
        <h1>SU Bytes</h1>
        <MenuSection data={mockData[0]} />
        <section>
            <h2>Bevs</h2>
            <article>
                <h3>Water</h3>
                <div>$0.00</div>
                <input type="number" value="0" />
                <button>Add</button>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.</p>
            </article>
        </section>
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
