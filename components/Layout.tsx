import { ReactNode } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import { useWallet } from 'contexts/wallet'
import WalletLoader from './WalletLoader'
import { useTheme } from 'contexts/theme'

const Layout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const wallet = useWallet()

  return (
    <div className={`h-screen ${theme.theme === 'dark' && 'bg-dark'}`}>
      <Head>
        <title>JunoTools</title>
        <meta name="description" content="Tooling dApp for Juno Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        {wallet.initialized ? (
          <div className="h-full flex">
            <Sidebar />
            <div className="flex justify-center items-center h-full w-full">
              {children}
            </div>
          </div>
        ) : (
          <div className="h-full flex justify-center items-center">
            <WalletLoader />
          </div>
        )}
      </main>
    </div>
  )
}

export default Layout