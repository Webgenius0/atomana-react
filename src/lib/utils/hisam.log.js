export const hisam = {
  log: (param) => {
    if (import.meta.env.VITE_DEVELOPER === "hisam") {
      console.log(param);
    }
  },
};
