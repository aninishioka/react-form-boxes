import { useState } from "react";

/** Form to create new box.
 *
 * props: addBox
 *
 * state:
 * - width
 * - height
 * - color
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({addBox}) {
    const initialState = {
        width: 0,
        height: 0,
        color: ""
    }
    const [formData, setFormData] = useState(initialState);

    /** Send {width, height, color} to parent & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    /** Update state w/ curr state of input element. */
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
             />
            <label htmlFor="height">Height:</label>
            <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
             />
            <label htmlFor="color">Background color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
             />

             <button>Add new box!</button>
        </form>
    );
}

export default NewBoxForm;