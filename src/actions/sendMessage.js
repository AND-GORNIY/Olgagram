export const sendMessage = (message: string) => {
  return {
    type: 'SEND_MESSAGE',
    message: message,
  };
};
