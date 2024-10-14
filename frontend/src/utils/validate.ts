export const validateRegisterForm = (data) => {

  let error ={};
  //name
  if (!data.name) {
    error.name = "please enter proper name";
  }

  //pass
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(data.pass)) {
    error.pass =
      "password should be content atleast 1 uppercase 1 lovercase 1 digit 1 special char and minimum 8 char in length";
  }

  //email
  const reemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z0-9._%+-]{2,}$/;
  if (!reemail.test(data.email)) {
    error.email = "please provide valide email";
  }

  //confirm pass
  if (data.pass != data.confpass) {
    error.confpass = "Password Does not match";
  }

  return error;
};
