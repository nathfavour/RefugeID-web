
import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

const core = new Core({
  projectId: '259b40a19786a50de69a872b801594e0'
})

const metadata = {
  name: 'idsafe',
  description: ' Secure crypto integration solution',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared 'core' instance
  metadata
})