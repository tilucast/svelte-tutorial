export function press(node: Node, duration: number){
    let timer;

    const handleMouseDown = () => {
        timer = setTimeout(() => {
            node.dispatchEvent(
                new CustomEvent('press')
            )
        }, duration)
    }

    const handleMouseUp = () => {
        clearTimeout(timer)
    }

    node.addEventListener('mousedown', handleMouseDown)
    node.addEventListener('mouseup', handleMouseUp)

    return {
        update(newDuration: number){
            duration = newDuration
        },

        destroy(){
            node.removeEventListener('mousedown', handleMouseDown)
            node.removeEventListener('mouseup', handleMouseUp)
        }
    }
}