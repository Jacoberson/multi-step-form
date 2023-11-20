import { PropTypes } from "prop-types";
import TextInput from "../htmlComponents/TextInput";
import Label from "../htmlComponents/Label";
import Button from "../htmlComponents/Button";

Step1.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step1({ setCurrentStep }) {
  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="#">
        <Label name="name" text="Name" />
        <TextInput
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          isRequired={true}
        />
        <Label name="email" text="Email Address" />
        <TextInput
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          isRequired={true}
        />
        <Label name="phone-number" text="Phone Number" />
        <TextInput
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="e.g. +1 234 567 8900"
          isRequired={true}
        />
        {/* handle form validation */}
        <Button
          type="submit"
          text="Next Step"
          onClick={() => setCurrentStep(2)}
        />
      </form>
    </div>
  );
}
