// @flow

import React, {Component} from 'react';
import ChatFooter from './ChatFooter';

const answerOptions = [
  {message: 'How are you, honey!'},
  {message: "I can't believe it!"},
  {message: 'Nice to here that...'},
  {message: 'Awful news...'},
  {message: "Don't want to speak about it"},
  {message: 'Good bye!'},
  {message: '❤️'},
];

type Props = {
  chatId: number,
  chatName: string,
  userName: string,
  sendMessage: string,
  sendMessage: (newMessage: string) => void,
};

class ChatFooterContainer extends Component<Props> {
  state = {
    messageText: '',
  };

  handleMessageInput = (messageText: string) => {
    this.setState({
      messageText,
    });
  };

  handleMessageSend = () => {
    const {chatId, chatName, userName, sendMessage} = this.props;

    const newMessage = {
      isPinned: false,
      receiverId: 2,
      senderName: userName,
      text: this.state.messageText,
      time: '11:03',
      chatId: chatId,
    };

    setTimeout(() => {
      const answer = {
        isPinned: false,
        receiverId: 1,
        senderName: chatName,
        text: answerOptions[Math.floor(Math.random() * 3)].message,
        time: '11:03',
        chatId: chatId,
      };

      sendMessage(answer);
    }, 2000);

    sendMessage(newMessage);

    this.setState({
      messageText: '',
    });
  };

  render() {
    return (
      <ChatFooter
        onMessageInput={this.handleMessageInput}
        messageText={this.state.messageText}
        onMessageSend={this.handleMessageSend}
      />
    );
  }
}

export default ChatFooterContainer;
