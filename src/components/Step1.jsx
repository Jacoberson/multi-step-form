import Input from "./Input";
import Label from "./Label";
import Button from "./Button";

export default function Step1() {
  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="#">
        <Label name="name" text="Name" />
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          isRequired={true}
        />
        <Label name="email" text="Email Address" />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          isRequired={true}
        />
        <Label name="phone-number" text="Phone Number" />
        <Input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="e.g. +1 234 567 8900"
          isRequired={true}
        />
        <Button type="submit" text="Next Step" />
      </form>
    </div>
  );
}
