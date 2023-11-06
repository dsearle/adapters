export type AdapterProjectCategory =
  | 'WIRELESS'
  | 'SENSORS'
  | 'ENERGY'
  | 'COMPUTE'
  | 'AI'
  | 'OTHER'
  | 'NOT_DEPIN'
  | 'LABOR'

export type AdapterProjectChain =
  | 'ETHEREUM'
  | 'ALGORAND'
  | 'COSMOS'
  | 'SOLANA'
  | 'POLKADOT'
  | 'XINFIN'
  | 'IOTEX'
  | 'NATIVE'
  | 'POLYGON'
  | 'BINANCE'
  | 'KADENA'
  | 'ARBITRUM'
  | 'CARDANO'
  | 'BITCOIN'
  | 'GNOSIS'
  | 'PEAQ'
  | 'METIS'
  | 'BNB_CHAIN'
  | 'FILECOIN'
  | 'CRONOS'
  | 'BNB'
  | 'VECHAIN'
  | 'XDC'
  | 'APTOS'
  | 'VECHAIN'

export type AdapterProjectToken =
  | 'ACN'
  | '_0X0'
  | 'ADVT'
  | 'AFY'
  | 'AGIX'
  | 'AIEPK'
  | 'AIONE'
  | 'AKT'
  | 'ALEPH'
  | 'ALI'
  | 'ANKR'
  | 'AOA'
  | 'AR'
  | 'ARC'
  | 'ASTO'
  | 'ATOR'
  | 'AXIS'
  | 'BAD'
  | 'BAT'
  | 'BAZED'
  | 'BCB'
  | 'BCUBE'
  | 'BIRD'
  | 'BIST'
  | 'BONO'
  | 'BOOT'
  | 'BOP'
  | 'BOTTO'
  | 'BP'
  | 'BRAIN'
  | 'BRG'
  | 'BTC'
  | 'BTRST'
  | 'BZZ'
  | 'CAI'
  | 'CDT'
  | 'CIRUS'
  | 'CLA'
  | 'CLORE'
  | 'CND'
  | 'COCO'
  | 'CPC'
  | 'CRANKK'
  | 'CRU'
  | 'CUDOS'
  | 'DAG'
  | 'DATA'
  | 'DBC'
  | 'DCK'
  | 'DIMO'
  | 'DIONE'
  | 'DNX'
  | 'DPR'
  | 'DRF'
  | 'DSLA'
  | 'DTRAVEL'
  | 'DTX'
  | 'DVPN'
  | 'DWIN'
  | 'EMAID'
  | 'ETHFAI'
  | 'EWT'
  | 'FACT'
  | 'FAKEAI'
  | 'FET'
  | 'FIL'
  | 'FLUX'
  | 'FLY'
  | 'FOAM'
  | 'FORT'
  | 'FRY'
  | 'GAGA'
  | 'GAI'
  | 'GEEQ'
  | 'GEOD'
  | 'GIANT'
  | 'GLM'
  | 'GNY'
  | 'GPTT'
  | 'GPU'
  | 'GRT'
  | 'HEART'
  | 'HERA'
  | 'HNT'
  | 'HONEY'
  | 'HOPR'
  | 'HOT'
  | 'HYPC'
  | 'IAG'
  | 'IAI'
  | 'IAQ'
  | 'IMGNAI'
  | 'INJ'
  | 'IOT'
  | 'IOTX'
  | 'IQ'
  | 'JIM'
  | 'JINNI'
  | 'JKL'
  | 'JUR'
  | 'KEY'
  | 'KOII'
  | 'KOIN'
  | 'KTON'
  | 'KWAI'
  | 'KWH'
  | 'LAI'
  | 'LINK'
  | 'LIVE'
  | 'LOOP'
  | 'LPT'
  | 'MAN'
  | 'MASQ'
  | 'MEDIA'
  | 'MEVFREE'
  | 'MINTME'
  | 'MIOTA'
  | 'MMAPS'
  | 'MOBILE'
  | 'MODA'
  | 'MOOV'
  | 'MXC'
  | 'MYST'
  | 'NATIX'
  | 'NCDT'
  | 'NERF'
  | 'NFAI'
  | 'NKN'
  | 'NMR'
  | 'NODL'
  | 'NOISEGPT'
  | 'NXRA'
  | 'OCEAN'
  | 'OCTA'
  | 'OLAS'
  | 'ONO'
  | 'ORAI'
  | 'OXT'
  | 'PAAL'
  | 'PACT'
  | 'PAINT'
  | 'PCN'
  | 'PHA'
  | 'PHB'
  | 'PIXIA'
  | 'PLANETS'
  | 'PNB'
  | 'POKT'
  | 'POWR'
  | 'PRE'
  | 'PRV'
  | 'QUAD'
  | 'QUICKI'
  | 'REAP'
  | 'RIO'
  | 'RLB'
  | 'RLC'
  | 'RNDR'
  | 'ROKO'
  | 'ROSO'
  | 'RSS3'
  | 'RUFF'
  | 'RUSHAI'
  | 'RWN'
  | 'SC'
  | 'SCP'
  | 'SDAO'
  | 'SHDW'
  | 'SIA'
  | 'SKEY'
  | 'SMARTCREDIT'
  | 'SNS'
  | 'SOAR'
  | 'SPACE'
  | 'SRX'
  | 'STORJ'
  | 'STOS'
  | 'SUPERSTAKE'
  | 'SURE'
  | 'TAO'
  | 'tARKE'
  | 'TARO'
  | 'TFT'
  | 'THETA'
  | 'TLOS'
  | 'TRAC'
  | 'TRACE'
  | 'TRIAS'
  | 'Type'
  | 'UFI'
  | 'UMOON'
  | 'UPX'
  | 'VAI'
  | 'VET'
  | 'VRA'
  | 'VXV'
  | 'WEFI'
  | 'WIFI'
  | 'WINR'
  | 'WMT'
  | 'WNT'
  | 'WXM'
  | 'XNET'
  | 'XYO'
  | 'ZCN'
  | 'ACN'
  | 'AIMX'
  | 'AIOZ'
  | 'ALBT'
  | 'APN'
  | 'ARB'
  | 'NAVI'
  | 'AURORA'
  | 'AVT'
  | 'IBAT'
  | 'BDP'
  | 'BROCK'
  | 'BLKC'
  | 'BLS'
  | 'BONFIRE'
  | 'CFG'
  | 'CGPT'
  | 'CHEQ'
  | 'CHER'
  | 'CLS'
  | 'CTXC'
  | 'DAFI'
  | 'DEFIT'
  | 'DIS.D'
  | 'TRVL'
  | 'ELXR'
  | 'MLN'
  | 'EMT'
  | 'DOME'
  | 'GHX'
  | 'GEL'
  | 'GENE'
  | 'HAPI'
  | 'XHV'
  | 'HYPE'
  | 'HID'
  | 'IBEX'
  | 'INT'
  | 'TEER'
  | 'IOTA'
  | 'JOB'
  | 'JPEG'
  | 'JUNO'
  | 'KVT'
  | 'KNJ'
  | 'KYVE'
  | 'LAVITA'
  | 'ZRO'
  | 'LUN'
  | 'METIS'
  | 'MINIMA'
  | 'MOFI'
  | 'GLMR'
  | 'NIT'
  | 'XNA'
  | 'NITRO'
  | 'NOS'
  | 'NTX'
  | 'ONI'
  | 'OPCT'
  | 'OXAI'
  | 'PASG'
  | 'PEACH'
  | 'SOUL'
  | 'PI'
  | 'PKT'
  | 'QQQ'
  | 'XPX'
  | 'PULSE'
  | 'PUSH'
  | 'QANX'
  | 'QRL'
  | 'QNT'
  | 'RAVEN'
  | 'REGEN'
  | 'RUMI'
  | 'RUX'
  | 'SHA'
  | 'SAFE'
  | 'SAITO'
  | 'SARCO'
  | 'SHM'
  | 'SOLR'
  | 'SFX'
  | 'SQL'
  | 'SUDO'
  | 'NOIA'
  | 'THL'
  | 'TFUEL'
  | 'TOTEM'
  | 'UTG'
  | 'UPR'
  | 'VEGA'
  | 'PYR'
  | 'WSI'
  | 'XX'
  | 'ZTG'
  | 'ZION'

export type AdapterProject = {
  id: string
  category: AdapterProjectCategory
  chain: AdapterProjectChain | null
  cmcSlug: string | null
  coingeckoId: string | null
  description: string | null
  investors: string[]
  name: string
  token: AdapterProjectToken | null
}
