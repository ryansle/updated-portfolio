import { atom } from 'recoil';

const initialFields = {
  email: '',
  name: '',
  phoneNumber: '',
  favoriteColor: '',
  whyFavorite: '',
  pin: '',
};

const fields = atom({
  key: 'fields',
  default: initialFields,
});

export { fields };
