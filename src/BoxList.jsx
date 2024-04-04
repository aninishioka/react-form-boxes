import { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/** Render all Box components + NewBoxForm
 *
 * props: none
 *
 * state:
 * - boxes: [{width, height, color}]
 *
 * App -> BoxList -> Box, NewBoxForm
*/

function BoxList() {
    const [boxes, setBoxes] = useState([])

    function renderBoxes() {
        return (
            <ul>
                {boxes.map(box => (
                    <Box
                        key={box.id}
                        width={box.width}
                        height={box.height}
                        color={box.color}
                        removeSelf={() => removeBox(box.id)}
                    />
                ))}
            </ul>
        )
    }

    /** Update state with new box */
    function addBox(box) {
        const newBox = {...box, id: uuid()}
        setBoxes(boxes => [...boxes, newBox]);
    }

    /** Remove box from state */
    function removeBox(id) {
        setBoxes(boxes => boxes.filter(b => b.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;