export const getDateFromCreatedAt = (createdAt) => {
  const date = `${new Date(createdAt).getDate()}/${
    new Date(createdAt).getMonth() + 1
  }/${new Date(createdAt).getFullYear()}`;
  return date;
};
