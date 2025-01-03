import handlerContent from '../config/handlerContent.json';
import useHandler from '@store/useHandler';

const ControlBox = ({ id, choice = false }: { id: number; choice?: boolean }) => {
  const { toAppend, toDelete } = useHandler();

  return (
    <div
      className="flex items-center w-full gap-1 px-4 py-2 mb-2 bg-white cursor-pointer max-h-8 rounded-xl"
      onClick={() => {
        if (choice) {
          toAppend(id, Object.values(handlerContent[id].content)[0]);
        }else {
          toDelete(id);
        }
      }}
    >
      <i className="select-none material-symbols-outlined">{handlerContent[id].icon}</i>
      <p className="text-xs font-medium select-none">{handlerContent[id].name}</p>
    </div>
  );
};

export default ControlBox;