import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoomer",
  description: "Seamlessly join Zoom meetings from your browser",
  icons: {
    icon: "/icons/logo.svg",
  }
};
const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
)
}

export default RootLayout