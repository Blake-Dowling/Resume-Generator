import React from "react"
import EducationForm from "./EducationForm.js"
/* Props: 1. formData to maintain each form's value using the state object in index.js. 
 * 2. handleChange function to change the state of the form data */
export default function Form(props){
    // {console.log("Form: " + props.formData[props.dataset][props.index]["name"])}
    return (
        <div>
            <form>
                {/* Personal Information */}
                <h1>Personal Information</h1>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="name"
                    value={props.formData[props.dataset][props.index].name}
                />
                <textarea
                    placeholder="objective"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="objective"
                    value={props.formData[props.dataset][props.index].objective}
                />
                <input
                    type="text"
                    placeholder="phone"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="phone"
                    value={props.formData[props.dataset][props.index].phone}
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="email"
                    value={props.formData[props.dataset][props.index].text}
                />
                <input
                    type="text"
                    placeholder="website"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="website"
                    value={props.formData[props.dataset][props.index].website}
                />
                <input
                    type="text"
                    placeholder="Github"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="github"
                    value={props.formData[props.dataset][props.index].github}
                />
                <input
                    type="text"
                    placeholder="Linkedin"
                    onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                    dataset={props.dataset}
                    name="linkedin"
                    value={props.formData[props.dataset][props.index].linkedin}
                />
                {/* Education */}
                <h1>Education</h1>
                {/* <input 
                    type="checkbox"
                    onChange={() => props.handleChange(props.dataset)}
                    dataset={props.dataset}
                    name="includeEducation"
                    checked={props.formData.includeEducation}
                /> */}
                <button type="button" onMouseDown={props.addEducation}>Add Education</button>
                {/*console.log(props.formData)*/}
            </form>
        </div>
    )
}