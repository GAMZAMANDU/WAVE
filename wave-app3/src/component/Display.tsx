import React, { useState } from 'react';
import ControlBox from '@components/ControlBox';
import useMode from '@store/useMode';
import '@css/display.css';
import '@css/controlBox.css';

const Display = () => {
	const { mode } = useMode();
	const [open, setOpen] = useState(false);

	return (
		<div
			className={`w-[40.5rem] h-[23.125rem] rounded-xl bg-white/70 backdrop-blur-md p-6 flex gap-10 transition-all duration-300
      ${mode ? 'filter blur-[8px] blurred' : ''}`}>
			<section className="w-full h-full max-w-[256px] max-h-[326px] bg-[#ECECEC] rounded-lg flex items-center justify-center">
				<h5 className="font-PressStart2P">swipe</h5>
			</section>
			<section className="w-full max-h-full overflow-auto">
				<h4 className="text-base font-bold text-titleColor">제스처의 기능을 만들어주세요</h4>
				<p className="font-normal text-xs text-[#AAA] mb-2">기능을 등록하지 않는다면 비활성화돼요</p>
				<ControlBox commend="5분 후 창 닫기" />
				<ControlBox commend="youtube 실행하기" />
				<ControlBox commend="창 닫기" />
				<ControlBox commend="새 탭 생성" />
				<button className="font-normal text-xs text-[#AAA] cursor-pointer list-none" onClick={() => setOpen(!open)}>
					+ 새로운 이벤트를 추가하세요
				</button>
				{open &&
					controlList.map((item, index) => (
						<div
							key={index}
							className="opacity-0 control-box-animate"
							style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
							<ControlBox commend={item.commend} />
						</div>
					))}
			</section>
		</div>
	);
};

const controlList = [
	{
		icon: '',
		commend: '5분 후 창 닫기',
	},
	{
		icon: '',
		commend: 'youtube 실행하기',
	},
	{
		icon: '',
		commend: '창 닫기',
	},
	{
		icon: '',
		commend: '새 탭 생성',
	},
	{
		icon: '',
		commend: '새로운 이벤트',
	},
];

export default Display;
