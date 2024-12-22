import Display from '@components/Display';
import RunButton from '@components/RunButton';
import SettingButton from '@components/SettingButton';
import H1 from '@components/H1';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <H1 content='Hello, world'/>
      <section className="flex justify-center gap-2 mb-5">
        <RunButton />
        <SettingButton />
      </section>
      <Display />
    </div>
  );
};

export default Home;
