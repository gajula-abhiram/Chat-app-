import { useDeleteMessage } from '../../../../../shared/hooks/useDeleteMessage';
import Icon from '../../../../ui/Icon';

const DeleteMessage = ({ fromMe, id }) => {
  // message
  const { deleteMessage } = useDeleteMessage();
  return (
    <li>
      <a
        href='#'
        role='button'
        onClick={() => {
          if (fromMe) {
            deleteMessage({ id });
          }
        }}
        className={`flex items-center justify-start gap-2  text-sm drop-shadow-2xl-white ${
          !fromMe ? 'pointer-events-none text-slate-500/50' : 'text-slate-800'
        }`}
      >
        <Icon
          src='#icon-trash'
          style={`drop-shadow-2xl-black w-3 h-3 ${
            !fromMe ? 'fill-slate-400/60' : 'fill-slate-800'
          }`}
        />
        Delete
      </a>
    </li>
  );
};

export default DeleteMessage;
