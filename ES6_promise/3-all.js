import { uploadPhoto, createUser } from './utils';

export  default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photoResponse, userResponse] = values;
      console.log(`firstName ${userResponse.body} lastName ${photoResponse.body}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
