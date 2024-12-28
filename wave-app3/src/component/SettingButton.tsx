import '@css/settingButton.css';
import useMode from '@store/useMode';
import axios from 'axios';

const SettingButton = () => {
  const update = async () => {
    await axios.patch('/handler', {
      access_token : localStorage.getItem('access_token'),
      name : localStorage.getItem('name'),
      handler_config: localStorage.getItem('handler_config')
    });
  }
  
  const { toMode } = useMode();

  return (
    <img
      src="/assets/button/setting.svg"
      className="cursor-pointer rotate-container"
      alt="setting-button"
      width={50}
      height={50}
      onClick={() => {update(); toMode(0)}}
    />
  )
}

export default SettingButton;