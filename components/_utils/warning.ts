import warning from 'warning';

export default function (condition: any, component: string, msg: string): void {
  warning(condition, `[co-ui ${component}]: ${msg}`);
}
