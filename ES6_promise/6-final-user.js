import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const status = [];
  await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(async (data) => {
      status.push({ status: 'fulfilled', value: data });
      await uploadPhoto(fileName);
    })
    .catch((error) => {
      status.push({ status: 'rejected', value: error.toString() });
    });
  return status;
}
