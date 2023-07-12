// Bind certificate name and id with certificate photos
export const bindParentIdWithPhotos = (arr) => {
  let tmp = [];
  arr?.forEach((item) => {
    return item?.certificates?.forEach((i) => {
      tmp = [
        ...tmp,
        { ...i, parentId: item._id, name: item.position || item.degree },
      ];
    });
  });
    
    return tmp;
};
