import { EPool } from 'enums'

export const EU_PRIMARY_API = (process.env.EU_PRIMARY_API_ENDPOINT || process.env.NEXT_PUBLIC_EU_PRIMARY_API_ENDPOINT) as string
export const EU_BACKUP_API = (process.env.EU_BACKUP_API_ENDPOINT || process.env.NEXT_PUBLIC_EU_BACKUP_API_ENDPOINT) as string
export const AS_PRIMARY_API = (process.env.AS_PRIMARY_API_ENDPOINT || process.env.NEXT_PUBLIC_AS_PRIMARY_API_ENDPOINT) as string
export const AS_BACKUP_API = (process.env.AS_BACKUP_API_ENDPOINT || process.env.NEXT_PUBLIC_AS_BACKUP_API_ENDPOINT) as string
export const US_PRIMARY_API = (process.env.US_PRIMARY_API_ENDPOINT || process.env.NEXT_PUBLIC_US_PRIMARY_API_ENDPOINT) as string
export const US_BACKUP_API = (process.env.US_BACKUP_API_ENDPOINT || process.env.NEXT_PUBLIC_US_BACKUP_API_ENDPOINT) as string

export const AGGREGATION_APIS = [
  EU_PRIMARY_API,
  EU_BACKUP_API,
  AS_PRIMARY_API,
  AS_BACKUP_API,
  US_PRIMARY_API,
  US_BACKUP_API,
]

export const MAPPER: Record<EPool, string> = {
  [ EPool.EU_PRIMARY ]: EU_PRIMARY_API,
  [ EPool.EU_BACKUP ]: EU_BACKUP_API,
  [ EPool.AS_PRIMARY ]: AS_PRIMARY_API,
  [ EPool.AS_BACKUP ]: AS_BACKUP_API,
  [ EPool.US_PRIMARY ]: US_PRIMARY_API,
  [ EPool.US_BACKUP ]: US_BACKUP_API,
  [ EPool.DEFAULT ]: EU_PRIMARY_API,
}
