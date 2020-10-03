import { PureComponent } from 'react';

import { circle, border1, border2, border3 } from './MapCircle.module.scss';

export default class MapCircle extends PureComponent {
  render() {
    return (
      <div className={border3}>
        <div className={border2}>
          <div className={border1}>
            <div className={circle} />
          </div>
        </div>
      </div>
    );
  }
}
