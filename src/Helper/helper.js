export const getHoursMinutes = date => {
    let postDuration = Math.abs(new Date() - new Date("2022-12-03T14:28:31.390Z"));
    let convertInMin = postDuration / 60000;
    let hours = Math.floor(convertInMin / 60);
    let minutes = Math.floor(convertInMin % 60);
    return { hours, minutes }
}