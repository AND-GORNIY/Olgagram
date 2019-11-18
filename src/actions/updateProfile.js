export const updateUser = (name, surname) => {
  return {
    type: 'SEND_MESSAGE',
    payload: {
      name,
      surname,
    },
  };
};
