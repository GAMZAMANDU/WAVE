import { useEffect, useState } from 'react';
import useMode from './../store/useMode';

const RunButton = () => {
  const {mode, toggle} = useMode();
  const [btnName, setBtnName] = useState('start');
  
  useEffect(() => {
    if (mode) {
      setBtnName('running');
    } else {
      setBtnName('start');
    }
  },[mode]);

  return (
    <img
    src={`/assets/button/${btnName}.svg`}
    className="cursor-pointer"
    alt={`${btnName}-button`}
    width={50}
    height={50}
    onClick={() => toggle()}
  />
  )
}

export default RunButton