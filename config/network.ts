import type { AppConfig } from './app'

export const mainnetConfig: AppConfig = {
  chainId: 'juno-1',
  chainName: 'Juno',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc.juno-1.deuslabs.fi',
  // httpUrl: "https://rpc.juno-1.deuslabs.fi",
  feeToken: 'ujuno',
  stakingToken: 'ujuno',
  coinMap: {
    ujuno: { denom: 'JUNO', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const uniTestnetConfig: AppConfig = {
  chainId: 'uni-5',
  chainName: 'Uni',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc.uni.juno.deuslabs.fi',
  httpUrl: 'https://lcd.uni.juno.deuslabs.fi',
  faucetUrl: 'https://faucet.uni.juno.deuslabs.fi',
  feeToken: 'ujunox',
  stakingToken: 'ujunox',
  coinMap: {
    ujunox: { denom: 'JUNOX', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const chihuahuaConfig: AppConfig = {
  chainId: 'chihuahua-1',
  chainName: 'Chihuahua Chain',
  addressPrefix: 'chihuahua',
  rpcUrl: 'https://rpc.cosmos.directory/chihuahua',
  httpUrl: 'https://api.cosmos.directory/chihuahua',
  faucetUrl: 'https://faucet.uni.juno.deuslabs.fi',
  feeToken: 'uhuahua',
  stakingToken: 'uhuahua',
  coinMap: {
    uhuahua: { denom: 'HUAHUA', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const getConfig = (network: string): AppConfig => {
  if (network === 'mainnet') return mainnetConfig
  return chihuahuaConfig
}

export const getPlaceholderAddress = (network: string = process.env.NEXT_PUBLIC_NETWORK): string => {
  return `${getConfig(network).addressPrefix}1234567890abcdefghijklmnopqrstuvwxyz...`
}
