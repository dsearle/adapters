export type AdapterProjectCategory =
  | 'AI'
  | 'COMPUTE'
  | 'ENERGY'
  | 'LABOR'
  | 'NOT_DEPIN'
  | 'OTHER'
  | 'SENSORS'
  | 'WIRELESS'

export type AdapterProjectChain =
  | 'ETHEREUM'
  | 'ALGORAND'
  | 'COSMOS'
  | 'SOLANA'
  | 'POLKADOT'
  | 'IOTEX'
  | 'NATIVE'
  | 'POLYGON'
  | 'BINANCE'
  | 'ARBITRUM'
  | 'CARDANO'
  | 'BITCOIN'
  | 'GNOSIS'
  | 'FILECOIN'
  | 'VECHAIN'

export type AdapterProjectDuneQueryIdentifiers = {
  BURN?: string
  LOCKED_BALANCE?: string
  MINT?: string
  PRICE?: string
  REVENUE?: string
  SUPPLY?: string
  TIME_SERIES?: string
}

export type AdapterProject = {
  id: string
  category: AdapterProjectCategory
  chain: AdapterProjectChain | null
  coingeckoId: string | null
  description: string | null
  investors: string[]
  name: string
  token: string | null
  duneQueries: AdapterProjectDuneQueryIdentifiers | null
}
