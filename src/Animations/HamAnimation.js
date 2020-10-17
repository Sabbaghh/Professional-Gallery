
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
            },
            when: 'beforeChildren',
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

export const HamSlices = {
    initial: {
        scale: 0.3
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'Spring',
        }
    }
}