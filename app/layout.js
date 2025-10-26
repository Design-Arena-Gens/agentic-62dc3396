import './globals.css'

export const metadata = {
  title: '80s Coastal Photography',
  description: 'Hyper-realistic photography of a man with brush up blonde hairstyle making a silly face in a coastal interior setting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
