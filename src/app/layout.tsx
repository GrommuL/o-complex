import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'O-Complex',
	description: 'Тестовое задание на позицию React Developer (Next.js)'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
