const pattern = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  strongPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
};

export default pattern;
