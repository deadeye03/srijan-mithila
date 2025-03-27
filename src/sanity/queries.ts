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

export const getHeroImageData = async () => {
    const query = `*[_type == "homeContent" && contentType == "hero-images"]{
        title,
        description,
        "imageUrl":image.asset->url,
        slug
    }`
    const data: HeroSchemaType[] = await client.fetch(query)
    return data
}
export const getCategoryBySectionData = async (section: string) => {
    console.log('Seciton', section)
    const query = `*[_type == "homeContent" && contentType =="${section}" ]{
        title,
        description,
        "imageUrl":image.asset->url,
        slug
    }`
    const data: HeroSchemaType[] = await client.fetch(query)
    return data
}
