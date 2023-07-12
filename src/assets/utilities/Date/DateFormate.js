export const dateFormat = (date) => {
    const d = new Date();
    const f = new Intl.DateTimeFormat("en-us", {
      dateStyle: "short",
    });
    return f.format(d);
  };