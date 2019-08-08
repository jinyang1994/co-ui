import { mdiPlus, mdiFace, mdiLoading, mdiAccount, mdiMagnify, mdiHeart, mdiCheckCircle, mdiCloseCircle, mdiInformation, mdiAlert, mdiWindowClose } from '@mdi/js';
import warning from '../_utils/warning';

const icons: {
  [name: string]: string;
} = {
  'plus': mdiPlus,
  'face': mdiFace,
  'account': mdiAccount,
  'loading': mdiLoading,
  'magnify': mdiMagnify,
  'heart': mdiHeart,
  'check-circle': mdiCheckCircle,
  'close-circle': mdiCloseCircle,
  'information': mdiInformation,
  'alert': mdiAlert,
  'window-close': mdiWindowClose,
};

export function register(name: string, path: string) {
  warning(!icons[name], 'icon', `overwrite icon ${name}`);
  icons[name] = path;
}
export default icons;
