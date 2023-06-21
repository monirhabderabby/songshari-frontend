export const straggerdAnim = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            translateX: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            translateY: -50,
        },
        show: {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                type: "tween",
                duration: 0.3,
                delay: delay,
            },
        },
    };
};
