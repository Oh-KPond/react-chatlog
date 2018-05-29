import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';


class Chatlog extends React.Component {
  isLocalMachine = () => {
    if (this.props.messageData.sender === 'Vladimir'){
      return 'chat-entry local';
    }
    return 'chat-entry remote';
  }

  render() {
    const sender = this.props.messageData.sender
    const message = this.props.messageData.body
    const chatTime = this.props.messageData.timeStamp

    return (
      <section className={this.isLocalMachine()}>
        <p className="entry-name">{sender}</p>
        <div className="entry-bubble">
          <p className="entry-body">{message}</p>
          <Timestamp time={chatTime} />
        </div>
      </section>
    )
  }
}

export default Chatlog;

Chatlog.propTypes = {
  messageData: PropTypes.object,

}
