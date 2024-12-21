import './index.css';
import Display from './component/Display';
import RunButton from './component/runButton';
import SettingButton from './component/SettingButton';

export default function App() {
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

        <main className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-bold text-center text-titleColor font-threat">
            Hello, World
          </h1>
          <section className="flex justify-center gap-2 mb-5">
            <RunButton/>
            <SettingButton/>
          </section>
          <Display />
        </main>
      </div>
    </div>
  );
}
