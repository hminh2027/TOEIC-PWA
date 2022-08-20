import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config: object = {
  position: 'bottom',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  className: 'font-bold',
};

export const notify = (content: string, type: string) => {
  if (type == 'success') {
    toast.success(content, config);
  } else if (type == 'error') {
    toast.error(content, config);
  } else if (type == 'warn') {
    toast.warn(content, config);
  }
};
// `${content.replace(/(\")+/g, '')}`
