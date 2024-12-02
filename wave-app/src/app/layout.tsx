import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import background from '../../public/images/background.png';

export const metadata: Metadata = {
	title: 'wave-app',
	description: 'Gesture-based interaction apps',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className='bg-[#D8D9D9]'>
				<div className="w-full min-h-screen absolute inset-0">
					<Image src={background} alt="background" layout="fill" objectFit="cover" priority />
				</div>
				<div className="relative z-10">{children}</div>
			</body>
		</html>
	);
}
