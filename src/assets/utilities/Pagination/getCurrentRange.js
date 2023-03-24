function getCurrentRange(count, page, total) {
    const startIndex = (page - 1) * count + 1;
    const endIndex = Math.min(startIndex + count - 1, total);
    return `View ${startIndex}-${endIndex > total ? total : endIndex} of ${total} Courses`;
}

export default getCurrentRange;
