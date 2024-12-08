const ControlBox = ({commend} : {commend : string}) => {
	return (
		<div className="flex items-center w-full gap-1 px-4 py-2 mb-2 bg-white cursor-pointer max-h-8 rounded-xl">
			<i className='select-none material-icons'>close</i>
			<p className='text-xs font-medium select-none'>{commend}</p>
		</div>
	);
};

export default ControlBox;