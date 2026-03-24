export const checkFormValidaton = (email, password, isSignIn) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isEmailValid) return "Enter a valid email (e.g. example@gmail.com)";

  if (!password?.trim()) return "Password is required";

  if (isSignIn) return null;

  const errors = [];

  if (!/[A-Z]/.test(password)) errors.push("One uppercase required");
  if (!/[a-z]/.test(password)) errors.push("One lowercase required");
  if (!/[0-9]/.test(password)) errors.push("One number required");
  if (!/[!@#$%^&*]/.test(password))
    errors.push("One special character required");

  if (errors.length !== 0) return errors[0];

  return null;
};
