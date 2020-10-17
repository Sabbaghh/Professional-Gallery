export const ArrowToBottom = {
    initial: {
        y: 0
    },
    animate:
    {
        y: [-10, -5, 0, 5, 10, 15, 10, 5, 0, -5, -10],
        color: ['#ffa090', '#f6ea68'],
        transition: {
            yoyo: Infinity,
            duration: 1.5
        }
    }
}