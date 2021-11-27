export const customMemoization = (fn) => {
  let state = {};
  return (arg) => {
    if (!state[arg]) {
      state[arg] = fn(arg);
    }
    return state[arg];
  };
};
