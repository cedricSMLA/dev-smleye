export const validateEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );

export const validatePhone = (phone) =>
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
    String(phone)
  );

export const validateForm = (data) => {
  const errors = {};
  if (!validateEmail(data.email)) errors.email = "Adresse email invalide.";
  if (data.phone && !validatePhone(data.phone))
    errors.phone = "Numéro de téléphone invalide.";
  if (data.message.length > 700) errors.message = "Le message est trop long.";
  return errors;
};
