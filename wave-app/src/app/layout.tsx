// import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="w-screen min-h-screen"
        style={{
          backgroundImage: 'url(/images/background.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
      <div className="flex justify-center items-end">
        {children}
      </div>
      </body>
    </html>
  );
}
