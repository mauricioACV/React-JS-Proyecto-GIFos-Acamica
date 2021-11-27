export const customMemoization = (fn) => {
    let state = {};
    return (arg) => {
      if (!state[arg]) {
        console.log("resultado no guardado, memorizando...");
        state[arg] = fn(arg);
      } else {
        console.log("resultado existente!");
      }
      return state[arg];
    };
}