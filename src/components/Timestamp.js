import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


class Timestamp extends React.Component {
  render() {
    const time = moment(this.props.time);
    const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
    const relative = time.fromNow();
    
    return <span className="entry-time" title={absolute}>{relative}</span>;
  }
}

export default Timestamp;

Timestamp.propTypes = {
  time: PropTypes.string
}
