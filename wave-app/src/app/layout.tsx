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
      <div className="mx-auto">
        {children}
      </div>
      </body>
    </html>
  );
}
