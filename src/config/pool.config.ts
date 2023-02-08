import info from '../../pool.config.json'

export const POOL_OPTIONS = {
  name: typeof process.env.PAGE_NAME !== "undefined" ? process.env.PAGE_NAME : ((info.name !== "" && info.name !== undefined) ? info.name : "Community pool"),
  description: typeof process.env.PAGE_DESCRIPTION !== "undefined" ? process.env.PAGE_DESCRIPTION : ((info.description !== "" && info.description !== undefined) ? info.description : "Community rabbits aboard!"),
  slogan: {
    primary: typeof process.env.SLOGAN_PRIMARY !== "undefined" ? process.env.SLOGAN_PRIMARY : info.slogan.primary,
    secondary: typeof process.env.SLOGAN_SECONDARY !== "undefined" ? process.env.SLOGAN_SECONDARY : info.slogan.secondary
  },
  maintainers: info.maintainers !== null ? info.maintainers : {},
  keywords: typeof process.env.PAGE_KEYWORDS !== "undefined" ? process.env.PAGE_KEYWORDS : ((info.keywords !== "" && info.keywords !== undefined) ? info.keywords : ""),
  images: {
    logo: typeof process.env.IMAGES_LOGO !== "undefined" ? process.env.IMAGES_LOGO : ((info.images.logo !== "" && info.images.logo !== undefined) ? info.images.logo : ""),
    og: typeof process.env.IMAGES_OG !== "undefined" ? process.env.IMAGES_OG : ((info.images.og !== "" && info.images.og !== undefined) ? info.images.og : ""),
    twitter: typeof process.env.IMAGES_TWITTER !== "undefined" ? process.env.IMAGES_TWITTER : ((info.images.twitter !== "" && info.images.twitter !== undefined) ? info.images.twitter : ""),
    hero: typeof process.env.IMAGES_HERO !== "undefined" ? process.env.IMAGES_HERO : ((info.images.hero !== "" && info.images.hero !== undefined) ? info.images.hero : ""),
  },
  effects: {
    showLocations: typeof process.env.EFFECTS_LOCATIONS !== "undefined" ? process.env.EFFECTS_LOCATIONS : info.effects.showLocations,
    showActionIcons: typeof process.env.EFFECTS_ACTIONS !== "undefined" ? process.env.EFFECTS_ACTIONS : info.effects.showActionIcons
  },
  meta: info.meta !== null ? info.meta : {},
  estd: (info.estd !== "" && info.estd !== undefined) ? info.estd : (new Date().getFullYear())
}

export const POOL_OFFICIAL = process.env.OFFICIAL ? true : false
