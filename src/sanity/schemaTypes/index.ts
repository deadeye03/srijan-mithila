
import { type SchemaTypeDefinition } from 'sanity'
import { NavbarType } from './Navbar'
import { SliderShowType } from './SliderShow'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        NavbarType,
        SliderShowType
    ]
}

