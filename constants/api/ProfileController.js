import { API, Storage } from 'aws-amplify';

export async function getProfilePicture(owner, successCallback, errorCallback) {
  try {
    let res = await Storage.get('profile', {
      level: 'protected',
      identityId: owner
    });
    if (typeof successCallback === "function") {
      successCallback(res);
    }
    return res;
  } catch(e) {
    if (typeof successCallback === "function") {
      errorCallback(e);
    }
    return e;
  }
};

export async function getOwnProfilePicture(successCallback, errorCallback) {
  try {
    let res = await Storage.get('profile', { level: 'protected' });
    if (typeof successCallback === "function") {
      successCallback(res);
    }
    return res;
  } catch(e) {
    if (typeof successCallback === "function") {
      errorCallback(e);
    }
    return e;
  }
};

export async function putOwnProfilePicture(file, contentType, successCallback,
                                           errorCallback) {
  try {
    let res = await Storage.put('profile', file, {
      level: 'protected',
      contentType: contentType
    });
    if (typeof successCallback === "function") {
      successCallback(res);
    }
    return res;
  } catch(e) {
    if (typeof successCallback === "function") {
      errorCallback(e);
    }
    return e;
  }
};
