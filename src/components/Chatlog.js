import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';


class Chatlog extends React.Component {
  render() {

    const chatData = this.props.chatData

    const messageComponents = chatData.map((message) =>{
      return (
        <Message
          key = {message.timeStamp}
          messageData = {message}
        />
      );
    });

    return (
      <section className="chat-log">
        {messageComponents}
      </section>
    )
  }
}

export default Chatlog;

Chatlog.propTypes = {
  chatData: PropTypes.arrayOf(PropTypes.object)
}
