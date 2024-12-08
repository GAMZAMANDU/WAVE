import ControllBox from "./ControlBox";

const Display = () => {
	return (
		<div className="w-[40.5rem] h-[23.125rem] rounded-xl bg-white/70 backdrop-blur-md p-6 flex gap-10">
			<section className="w-full h-full max-w-[256px] max-h-[326px] bg-[#ECECEC] rounded-lg flex items-center justify-center">
				<h5 className="font-PressStart2P">swipe</h5>
			</section>
			<section className="w-full h-full">
				<h4 className="text-base font-bold text-titleColor">제스처의 기능을 만들어주세요</h4>
				<p className="font-normal text-xs text-[#AAA]">기능을 등록하지 않는다면 비활성화돼요</p>
        <ControllBox />
			</section>
		</div>
	);
};

export default Display;
