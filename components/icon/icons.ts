import { mdiPlus, mdiFace, mdiLoading, mdiMagnify, mdiHeart } from '@mdi/js';
import warning from '../_utils/warning';

const icons: {
  [name: string]: string;
} = {
  'plus': mdiPlus,
  'face': mdiFace,
  'loading': mdiLoading,
  'magnify': mdiMagnify,
  'heart': mdiHeart,
};

export function register(name: string, path: string) {
  warning(!icons[name], 'icon', `overwrite icon ${name}`);
  icons[name] = path;
}
export default icons;
