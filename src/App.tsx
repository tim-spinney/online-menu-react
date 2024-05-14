import './App.css'
// 4. (continued from MenuItem.tsx) import it where we're going to plug it in

import MenuSection from './components/MenuSection'
import ShoppingCartInfo from './components/ShoppingCartInfo'
import { mockData } from './mockData'


/* function with CapitalizedName
   returns a single JSX (pseudo-HTML) element
*/
function App() {
  return (
    <>
      <nav>
        <h1>SU Bytes</h1>
        <ShoppingCartInfo />
      </nav>
      <main>
          {mockData.map(
              (menuSectionModel) => <MenuSection data={menuSectionModel} />
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
