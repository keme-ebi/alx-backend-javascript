import { uploadPhoto, createUser } from './utils';

const photo = uploadPhoto();
const user = createUser();

export default function handleProfileSignup() {
  Promise.all([photo, user])
    .then(([photo, user]) => {
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
