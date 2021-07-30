// Use regex to validate that some text follows string@string.string format
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
