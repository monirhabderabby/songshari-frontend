function getCurrentRange(count, page, total) {
    const startIndex = (page - 1) * count + 1;
    const endIndex = Math.min(startIndex + count - 1, total);
    return `${startIndex}-${endIndex > total ? total : endIndex} of ${total}`;
}

export default getCurrentRange;
