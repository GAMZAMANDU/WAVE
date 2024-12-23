import useMode from '@store/useMode';

const name = ['start', 'running'];
const RunButton = () => {
  const {mode, toggle} = useMode();

  return (
    <img
    src={`/assets/button/${name[mode]}.svg`}
    className="cursor-pointer"
    alt={name[mode]}
    width={50}
    height={50}
    onClick={() => toggle()}
  />
  )
}

export default RunButton