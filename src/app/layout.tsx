import React from 'react'
import Navbar from '~/components/navigation/navbar'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
				<Navbar />
				{children}
			</body>
    </html>
  )
}
