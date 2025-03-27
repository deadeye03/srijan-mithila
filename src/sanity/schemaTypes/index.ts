
import { type SchemaTypeDefinition } from 'sanity'
import { NavbarType } from './Navbar'
import { SliderShowType } from './SliderShow'
import { HomeContentType } from './home-content'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        NavbarType,
        SliderShowType,
        HomeContentType
    ]
}

