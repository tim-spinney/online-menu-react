import MenuItem from './MenuItem'
import { MenuSection as MenuSectionModel } from '../model/MenuSection'

interface MenuSectionProps {
    data: MenuSectionModel
    addItems: Function
}

function MenuSection(props: MenuSectionProps) {
    const { data } = props
    return (
        <section>
            <h2>{data.title}</h2>
            {/* 5. Put our component's name in <> in some other component's return value */}
            {/* becomes React.createElement(MenuItem, { data: mockData[0] }) */} 
            {data.items.map(menuItem => 
                <MenuItem key={menuItem.name} data={menuItem} addItems={props.addItems} />
            )}
        </section>
    )
}

export default MenuSection