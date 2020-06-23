import React from 'react';
import sessions from './directory.data';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sessions.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;