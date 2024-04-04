/** Box.
 *
 * props:
 * - width
 * - height
 * - color (for background of div)
 *
 * state: none
 *
 * BoxList -> Box
 */

function Box({width, height, color, removeSelf}) {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color
    }

    return (
    <div>
        <div style={style}></div>
        <button onClick={removeSelf}>X</button>
    </div>);
}

export default Box;