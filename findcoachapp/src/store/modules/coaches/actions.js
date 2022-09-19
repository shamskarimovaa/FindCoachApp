
export default {
  register(context, payload) {
    const formData = {
      id: context.rootGetters.userId,
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
