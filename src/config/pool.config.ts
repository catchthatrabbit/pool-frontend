import info from '../../pool.config.json'

export const POOL_OPTIONS = {
  name: process.env.PAGE_NAME !== "" ? process.env.PAGE_NAME : ((info.name !== "" && info.name !== undefined) ? info.name : "Community pool"),
  description: process.env.PAGE_DESCRIPTION !== "" ? process.env.PAGE_DESCRIPTION : ((info.description !== "" && info.description !== undefined) ? info.description : "Community rabbits aboard!"),
  maintainers: info.maintainers !== null ? info.maintainers : {},
  keywords: process.env.PAGE_KEYWORDS !== "" ? process.env.PAGE_KEYWORDS : ((info.keywords !== "" && info.keywords !== undefined) ? info.keywords : ""),
  images: {
    logo: process.env.IMAGES_LOGO !== "" ? process.env.IMAGES_LOGO : ((info.images.logo !== "" && info.images.logo !== undefined) ? info.images.logo : ""),
    og: process.env.IMAGES_OG !== "" ? process.env.IMAGES_OG : ((info.images.og !== "" && info.images.og !== undefined) ? info.images.og : ""),
    twitter: process.env.IMAGES_TWITTER !== "" ? process.env.IMAGES_TWITTER : ((info.images.twitter !== "" && info.images.twitter !== undefined) ? info.images.twitter : ""),
  },
  wallet: info.wallet !== null ? info.wallet : {},
  estd: (info.estd !== "" && info.estd !== undefined) ? info.estd : (new Date().getFullYear())
}

export const POOL_OFFICIAL = process.env.OFFICIAL ? true : false
