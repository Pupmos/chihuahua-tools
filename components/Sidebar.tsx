import clsx from 'clsx'
import { Anchor } from 'components/Anchor'
import { useWallet } from 'contexts/wallet'
import { useRouter } from 'next/router'
import BrandText from 'public/brand/brand-text.png'
import { NETWORK } from 'utils/constants'
import { footerLinks, links, socialsLinks } from 'utils/links'

import { SidebarLayout } from './SidebarLayout'
import { WalletLoader } from './WalletLoader'

const routes = [
  // { text: 'Upload Contract', href: `/contracts/upload` },
  // { text: 'CW1 Subkeys', href: `/contracts/cw1/subkeys` },
  { text: 'Mint Tokens', href: `/contracts/cw20/base` },
  { text: 'Airdrop Tokens', href: `/airdrops` },
  // { text: 'Mint NFT', href: `/contracts/cw721/base` },
  { text: 'Sign and Verify', href: `/sign-verify` },
  // { text: 'Token Faucet', href: `/request-tokens` },
]

export const Sidebar = () => {
  const router = useRouter()
  const wallet = useWallet()

  return (
    <SidebarLayout>
      {/* juno brand as home button */}
      <Anchor className="w-full" href="/" onContextMenu={(e) => [e.preventDefault(), router.push('/brand')]}>
        <img alt="" className="w-full text-plumbus hover:text-plumbus-light transition" src={BrandText.src} />
      </Anchor>

      {/* wallet button */}
      <WalletLoader />

      {/* main navigation routes */}
      {routes.map(({ text, href }) =>
        NETWORK === 'testnet' ? (
          <Anchor
            key={href}
            className={clsx(
              'py-2 px-4 -mx-4 uppercase', // styling
              'hover:bg-black/5 transition-colors', // hover styling
              'text-plumbus-60',
              { 'font-bold text-plumbus-70 rounded-sm outline-plumbus-70 outline': router.asPath.startsWith(href) }, // active route styling
              // { 'text-gray-500 pointer-events-none': disabled }, // disabled route styling
            )}
            href={href}
          >
            {text}
          </Anchor>
        ) : (
          text !== 'Token Faucet' && (
            <Anchor
              key={href}
              className={clsx(
                'py-2 px-4 -mx-4 uppercase', // styling
                'hover:bg-black/5 transition-colors', // hover styling
                'text-plumbus-60',
                { 'font-bold text-plumbus-70 outline-black outline': router.asPath.startsWith(href) }, // active route styling
                // { 'text-gray-500 pointer-events-none': disabled }, // disabled route styling
              )}
              href={href}
            >
              {text}
            </Anchor>
          )
        ),
      )}

      <div className="flex-grow" />

      {/* juno network status */}
      {/* <div className="flex flex-row items-center font-black text-xs">
        <div className="float-left m-1 w-2 h-2 bg-green-500 rounded-xl shadow-sm shadow-green-500" />
        {wallet.network.toUpperCase()}
      </div> */}

      {/* footer reference links */}
      <ul className="text-xs list-inside opacity-50">
        {footerLinks.map(({ href, text }) => (
          <li key={href}>
            <Anchor className="hover:text-plumbus hover:underline" href={href}>
              {text}
            </Anchor>
          </li>
        ))}
      </ul>

      {/* footer attribution */}
      <div className="text-xs text-plumbus/50">
        {process.env.NEXT_PUBLIC_WEBSITE_NAME} {process.env.APP_VERSION} <br />
        Created by{' '}
        <Anchor className="text-plumbus hover:underline" href="https://twitter.com/pupmos">
          pupmøs
        </Anchor>{' '}
        <br />
        Developed by{' '}
        <Anchor className="text-plumbus hover:underline" href={links.deuslabs}>
          deus labs
        </Anchor>
      </div>

      {/* footer social links */}
      <div className="flex gap-x-6 items-center text-plumbus/75">
        {socialsLinks.map(({ Icon, href, text }) => (
          <Anchor key={href} className="hover:text-plumbus" href={href}>
            <Icon aria-label={text} size={20} />
          </Anchor>
        ))}
      </div>
    </SidebarLayout>
  )
}
