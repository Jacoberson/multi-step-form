export default function validate(field, value) {
  switch (field) {
    case "name": {
      if (!value) {
        return "Name is required";
      }
      break;
    }
    case "email": {
      if (!value) {
        return "Email is required";
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(value)) {
        return "Invalid email address";
      }
      break;
    }
    case "phone": {
      if (!value) {
        return "Phone number is required";
      } else if (/[a-zA-Z]/g.test(value)) {
        return "Please enter only numbers";
      } else if (value.length < 10) {
        return "Phone number is not long enough";
      }
      break;
    }
  }
}
