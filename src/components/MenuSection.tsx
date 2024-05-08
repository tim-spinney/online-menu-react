import MenuItem from './MenuItem'
import { mockData } from '../mockData'

function MenuSection() {
    return (
        <section>
            <h2>Apps</h2>
            {/* 5. Put our component's name in <> in some other component's return value */}
            {/* becomes React.createElement(MenuItem, { data: mockData[0] }) */} 
            {mockData.map(menuItem => <MenuItem key={menuItem.name} data={menuItem} />)
            }
        </section>
    )
}

export default MenuSection