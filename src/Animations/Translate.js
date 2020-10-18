export const transaleFromRight = {
    initial: { x: '100vh' },
    animate: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.2
        },
    }
}

export const transaleFromLeft = {
    initial: { x: '-100vh' },
    animate: {
        x: 0,
        transition: {
            delay: 0.7,
            type: 'spring',
            stiffness: 200,
            duration: 0.5
        }
    }
}