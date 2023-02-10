import { poolConfig } from 'config';

export default function ok(status) {
  if (Boolean(status) === true) {
    return 'OK ' + poolConfig.POOL_OPTIONS.effects.emoji
  } else {
    return 'BRB ⏳'
  }
}
