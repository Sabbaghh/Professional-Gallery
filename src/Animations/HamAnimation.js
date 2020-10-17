
export const HamShow = {
    initial: {
        x: '100vw'
    },
    animate: {
        x: 0,
        transition: {
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    },
    exit: {
        x: '100vw',
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
}