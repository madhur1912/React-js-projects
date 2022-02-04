import React from "react"

function FormComponent(props) {
    return(
        <form onSubmit={props.data.handleSubmit}>
        <input
        type="text"
        value={props.data.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
        />
        <br />

        <input
        type="text"
        value={props.data.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleChange}
        />
        
        <textarea value={"hellllo...."}/>
        <br />

        <label>
        <input
        type="checkbox"
        name="isfriendly"
        checked={props.data.isfriendly}
        onChange={props.handleChange}
        /> Is Friendly?
        </label>

        <label>
        <input
        type="radio"
        name="gender"
        value="male"
        checked={props.data.gender=== "male"}
        onChange={props.handleChange}
        /> Male
        </label>

        <label>
        <input
        type="radio"
        name="gender"
        value="female"
        checked={props.data.gender=== "female"}
        onChange={props.handleChange}
        /> Female
        </label>
        
        <br />

        <label>
        Favourite Color:
        </label>

        <select
        value={props.data.favColor}
        onChange={props.handleChange}
        name="favColor"
        >

        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="brown">Brown</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>

        </select>

        <h1>{props.data.firstName} {props.data.lastName}</h1>
        <h2> you are a  {props.data.gender} </h2>
        <h2>your favourite color is {props.data.favColor}</h2>
        <button>Submit</button>
        </form>
    )
}

export default FormComponent


