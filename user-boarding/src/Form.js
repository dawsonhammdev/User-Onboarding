import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

export default function Form() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        terms: "",
        positions: "",
        motivation: ""
      });

      const [errors, setErrors] = useState({
        name: "",
        email: "",
        terms: "",
        positions: "",
        motivation: ""
      });

      const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", post);
        // reset form if successful
        setFormState({
          name: "",
          email: "",
          terms: "",
          positions: "",
          motivation: ""
        });
      })
      .catch(err => console.log(err.response));
  };

    <form >
    <label htmlFor="name">
      Name
      <input
        type="text"
        name="name"
      />
    </label>
    <label htmlFor="email">
      Email
      <input
        type="text"
        name="email"
      />
    </label>
    <label htmlFor="motivation">
      Why would you like to help?
      <textarea
        name="motivation"
      />
    </label>
    <label htmlFor="positions">
      What would you like to help with?
      <select id="positions" name="positions">
        <option value="Newsletter">Newsletter</option>
        <option value="Yard Work">Yard Work</option>
        <option value="Administrative Work">Administrative Work</option>
        <option value="Tabling">Tabling</option>
      </select>
    </label>
    <label htmlFor="terms" className="terms">
      <input
        type="checkbox"
        name="terms"
        checked={true}
      />
      Terms & Conditions
    </label>
    <button>Submit</button>
  </form>

  

}