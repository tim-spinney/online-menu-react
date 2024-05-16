import MenuSection from './MenuSection'
import { mockData } from '../mockData'

export default function Menu() {
    return (
        <>
          {mockData.map(
              (menuSectionModel) => <MenuSection data={menuSectionModel} />
          )}
        </>
    )
}