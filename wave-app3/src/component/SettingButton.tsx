import '@css/settingButton.css';
import useMode from '@store/useMode';

const SettingButton = () => {
  const { toMode } = useMode();

  return (
    <img
      src="/assets/button/setting.svg"
      className="cursor-pointer rotate-container"
      alt="setting-button"
      width={50}
      height={50}
      onClick={() => toMode(0)}
    />
  )
}

export default SettingButton;