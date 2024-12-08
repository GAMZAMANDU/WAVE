import React from 'react';

const ControlBox = ({commend} : {commend : string}) => {
	return (
		<div className="flex w-full gap-1 px-4 py-2 bg-white max-h-8 rounded-xl">
			<i className='w-4 h-4'>d</i><p className='text-xs font-medium'>{commend}</p>
		</div>
	);
};

export default ControlBox;
