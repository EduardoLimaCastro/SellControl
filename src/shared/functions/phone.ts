export const insertMaskInPhone = (phone: string) => {
  if (phone.length > 10) {
    return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, "($1) $2 $3-$4");
  } else {
    return phone.replace(/(\d{2})(\d)/, "($1) $2");
  }
};
