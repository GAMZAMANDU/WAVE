import ControlBox from '@components/ControlBox';
import useMode from '@store/useMode';
import '@css/display.css';

const Display = () => {
	const { mode } = useMode();

	return (
		<div
			className={`w-[40.5rem] h-[23.125rem] rounded-xl bg-white/70 backdrop-blur-md p-6 flex gap-10 transition-blur
      ${mode ? 'filter blur-[8px] !pointer-events-none' : ''}`}>
			<section className="w-full h-full max-w-[256px] max-h-[326px] bg-[#ECECEC] rounded-lg flex items-center justify-center">
				<h5 className="font-PressStart2P">swipe</h5>
			</section>
			<section className="w-full h-full">
				<h4 className="text-base font-bold text-titleColor">제스처의 기능을 만들어주세요</h4>
				<p className="font-normal text-xs text-[#AAA] mb-2">기능을 등록하지 않는다면 비활성화돼요</p>
				<ControlBox commend="5분 후 창 닫기" />
				<details>
					<summary className="font-normal text-xs text-[#AAA] cursor-pointer list-none">+ 새로운 이벤트를 추가하세요</summary>
				</details>
			</section>
		</div>
	);
};

export default Display;
