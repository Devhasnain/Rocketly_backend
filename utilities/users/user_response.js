export const user_response = (body) => {
  return {
    first_name: body?.first_name,
    last_name: body?.last_name,
    email: body?.email,
    _id:body?._id
  };
};
