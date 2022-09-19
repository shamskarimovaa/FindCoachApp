export default {
  register(context, payload) {
    const formData = {
      id: "c3",
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate,
    };
    console.log(formData)
    context.commit("mutateCoaches", formData);
  },
};
