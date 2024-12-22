import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div
      className="flex items-center justify-center w-screen min-h-screen"
      style={{
        backgroundImage: 'url(/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-[40.5rem] mx-auto">
        <header className="flex justify-center gap-5 mb-6">
          <img src="/assets/logo.svg" alt="logo" width={74} height={22} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
