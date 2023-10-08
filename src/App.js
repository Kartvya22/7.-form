import { useState } from "react";
import "./App.css";

function App() {
  // // * handling single field in form

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   // console.log("printing first Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("printing last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  // console.log(firstName);
  // console.log(lastName);

  // // * Handling multipule input field by one useState only

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    // console.log(event.target)
    const { type, name, value, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // console.log(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the Entire form ka data..")
    console.log(formData);
     
  }

  return (
    <div className="App">
      {/* **controlled component : maintain state inside component */}
      {/* in controlled component we can track state in all the element of useState like not only formData it's track firstName, lastName and email  */}
      {/* it means it track all the particular element of useState */}

      <form  onSubmit={submitHandler}>
        {/* in form we can controlled component using mainly value attribute others attribute like checked from checkbox field*/}
        {/* ** FLOW : if we write something in firstName input field then it can trigger onChange event and onChange event trigger changeHandler() function, chagehandler() function is use to setFormData and here fromData is created using useState so it's re-render the whole UI , thus the value is set to the firstName input field by formData.firstName */}
        {/* by this we can track our firstName input field state */}

        <br />
        <br />

        <input
          type="text"
          placeholder="First-Name"
          // onChange={changeFirstNameHandler}
          onChange={changeHandler}
          name="firstName"
          // tracking the firstName input element state by value attribute
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last-Name"
          // onChange={changeLastNameHandler}
          onChange={changeHandler}
          name="lastName"
          // tracking the lastName input element state by value attribute
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your email.."
          name="email"
          onChange={changeHandler}
          // tracking the lastName input element state by value attribute
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your comments here"
          name="comments"
          onChange={changeHandler}
          value={formData.comments}
          cols="24"
          rows="3"
        ></textarea>

        <br />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          //  value={formData.isVisible}
          // we use checked attribute for checkbox
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="mode1"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="mode1">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="mode2"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="mode2">Offline Mode</label>
        </fieldset>

        <br />
        <br />

        <label htmlFor="favCar">Tell me your Favourite Car : </label>

        <select
          name="favCar"
          id="favCar"
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="BMW">BMW</option>
          <option value="Scarpio">Scarpio</option>
          <option value="Fartuner">Fartuner</option>
          <option value="Verna">Verna</option>
          <option value="Creta">Creta</option>
        </select>

        <br />
        <br />

        {/* <input type="submit" value="submit" /> */}
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
