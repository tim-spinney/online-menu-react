import { MenuItem } from './model/MenuItem'
import { MenuSection } from './model/MenuSection'

export const mockData: MenuSection[] = [
    {
        title: 'Apps',
        items: [
            {
                name: 'Crispy Cauliflower',
                price: 7.99,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.'
            },
            {
                name: 'Buffalo Wings',
                price: 9.99,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.'
            },
            {
                name: 'Veggies & Ranch',
                price: 4.99,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.'
            },
        ]
    },
    {
        title: 'Bevs',
        items: [
            {
                name: 'Water',
                price: 0.00,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos voluptate voluptatibus impedit, vitae sint officia incidunt, repudiandae, delectus possimus fugit quae nihil laboriosam asperiores culpa. Repellat cumque at rerum.'
            },
        ]
    }
];
