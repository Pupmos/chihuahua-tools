export const favicons = {
  path: '/assets/',
  appName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  appShortName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  appDescription: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} is a swiss army knife that helps you build on Juno by providing smart contract front ends`,
  developerName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  developerURL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  background: '#F0827D',
  theme_color: '#F0827D',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
  },
}
