import { useEffect, useState } from 'react'
import MenuSection from './MenuSection'
import { MenuSection as MenuSectionModel } from '../model/MenuSection'

export default function Menu() {
    const [menuData, setMenuData] = useState<MenuSectionModel[]>()

    useEffect(() => {
        const controller = new AbortController()
        const getData = async () => {
            const response = await fetch('/api/menu/items', {
                signal: controller.signal
            })
            const data = await response.json()
            setMenuData(data)
        }
        getData()
        return () => {
            controller.abort()
        }
    }, [])

    if(!menuData) {
        return <div>Loading&hellip;</div>
    }

    return (
        <>
          {menuData.map(
              (menuSectionModel) => <MenuSection data={menuSectionModel} />
          )}
        </>
    )
}