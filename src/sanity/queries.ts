import { client } from "./client"

export const getNavMenu = async () => {
    const query = `*[_type == "navbar"]{...}`
    const data: NavSchemaType[] = await client.fetch(query)
    return data
}
export const getSlideImages = async () => {
    const query = `*[_type == "sliderShow"][0]{
        title,
        'images':images[].asset->url
    }`
    const data: SliderShowSchemaType = await client.fetch(query)
    return data
}