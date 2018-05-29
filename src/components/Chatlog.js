import React from 'react';
import PropTypes from 'prop-types';
// import Message from './Message';


class Chatlog extends React.Component {
  render() {

    const chatData = this.props.chatData
    console.log(chatData);
    return (
      <section className="chat-log">
        <Message chatData={chatData} />
      </section>
    )
  }
}

export default Chatlog;

Chatlog.propTypes = {
  chatData: PropTypes.arrayOf(PropTypes.object)
}
