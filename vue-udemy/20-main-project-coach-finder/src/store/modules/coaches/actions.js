export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // const response = await fetch(
    //   `https://coach-finder-91adb-default-rtdb.firebaseio.com/coaches/${userId}.json`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(coachData),
    //   }
    // );
    //
    // const responseData = await response.json();

    const response = await fetch(
      `https://coach-finder-91adb-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      // error...
    }

    if (response)
      context.commit('registerCoach', {
        ...coachData,
        id: userId,
      });
  },
};
