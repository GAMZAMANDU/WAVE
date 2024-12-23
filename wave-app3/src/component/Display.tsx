import React, { useState } from 'react';
import ControlBox from '@components/ControlBox';
import useMode from '@store/useMode';
import useHandler from '@store/useHandler';
import handlerContent from '../config/handlerContent.json';
import '@css/display.css';
import '@css/controlBox.css';



const Display = () => {
	const { mode } = useMode();
	const { hand_id, toNext, handContent } = useHandler();
	const [open, setOpen] = useState(false);

	return (
		<div
			className={`w-[40.5rem] h-[23.125rem] rounded-xl bg-white/70 backdrop-blur-md p-6 flex gap-10 transition-all duration-300
      ${mode ? 'filter blur-[8px] blurred' : ''}`}>
			<section className="w-full h-full max-w-[256px] max-h-[326px] bg-[#ECECEC] rounded-lg flex items-center justify-center" onClick={() => toNext()}>
				<h5 className="font-PressStart2P">{handContent[hand_id].name}</h5>
			</section>
			<section className="w-full max-h-full overflow-auto">
				<h4 className="text-base font-bold text-titleColor">제스처의 기능을 만들어주세요</h4>
				<p className="font-normal text-xs text-[#AAA] mb-2">기능을 등록하지 않는다면 비활성화돼요</p>
				{Object.keys(handContent[hand_id].content).map((key, index) => {
					return <ControlBox key={index} id={Number(key)} />
				})}
				
				<button className="font-normal text-xs text-[#AAA] cursor-pointer list-none" onClick={() => setOpen(!open)}>
					+ 새로운 이벤트를 추가하세요
				</button>
				{open &&
					handlerContent.map((item, index) => (
						<div
							key={index}
							className="opacity-0 control-box-animate"
							style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
							<ControlBox id={item.handler_id} />
						</div>
					))}
			</section>
		</div>
	);
};



export default Display;
