import './index.css';
import React from 'react';

export default function App() {
  return (
    <>
      <div
        className="w-screen min-h-screen"
        style={{
          backgroundImage: 'url(/assets/background.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
      <div className="mx-auto">
      <header className="flex gap-5 mb-6">
        <img src="./assets/logo.svg" alt="logo" width={74} height={22} />
      </header>
      <main>
        <h1 className="font-bold text-4xl text-titleColor mb-4">Hello, World</h1>
        <section className="flex gap-2">
          <img
            src="./assets/button/start-btn.svg"
            className="cursor-pointer"
            alt="start-button"
            width={50}
            height={50}
          />
          <img
            src="./assets/button/setting-btn.svg"
            className="cursor-pointer"
            alt="setting-button"
            width={50}
            height={50}
          />
        </section>
      </main>
      </div>
      </div>
    </>
  );
}
