import { mdiPlus, mdiFace, mdiLoading } from '@mdi/js';
import warning from '../_utils/warning';

const icons: {
  [name: string]: string;
} = {
  'plus': mdiPlus,
  'face': mdiFace,
  'loading': mdiLoading,
};

export function register(name: string, path: string) {
  warning(!icons[name], 'icon', `overwrite icon ${name}`);
  icons[name] = path;
}
export default icons;
