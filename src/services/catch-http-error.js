import notify from './notify.js';
import Sounds from './sounds.js';

const catchHttpError = (res) => {
  let err;
  if (res) {
    if (res.data) {
      if (res.data.message)
        err = res.data.message;
    }
  }
  if (err)
    notify.error(err);
  else
    notify.error('Something went wrong');

  Sounds.notAllowed.play();

  return Promise.reject(res);

}

export default catchHttpError
