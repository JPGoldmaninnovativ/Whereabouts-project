import { API, Storage } from 'aws-amplify';


/* Exmple profile object
 * {
 *   owner: "UUID",
 *   type: "type",
 *   alias: "name",
 *   sex: "sex"
 * }
 */


 export async function getProfilesByOwner(owner, successCallback, errorCallback) {
   let path = '/profile/owner/'.concat(owner);
   let init = {
     headers: {},
     response: true,
     queryStringParameters: {},
   };
   try {
     let res = await API.get(apiName, path, init);
     if (typeof successCallback === "function") {
       successCallback(res.data);
     }
     return res.data;
   } catch(e) {
     if (typeof successCallback === "function") {
       errorCallback(e);
     }
     return e;
   }
 };

 export async function getProfilesByType(type, successCallback, errorCallback) {
   let path = '/profile/type/'.concat(id);
   let init = {
     headers: {},
     response: true,
     queryStringParameters: {},
   };
   try {
     let res = await API.get(apiName, path, init);
     if (typeof successCallback === "function") {
       successCallback(res.data);
     }
     return res.data;
   } catch(e) {
     if (typeof successCallback === "function") {
       errorCallback(e);
     }
     return e;
   }
 };

 export async function postProfile(profile, successCallback, errorCallback) {
   let path = '/profile';
   let init = {
     body: profile,
     headers: {},
     response: true,
     queryStringParameters: {},
   };
   try {
     let res = await API.post(apiName, path, init);
     if (typeof successCallback === "function") {
       successCallback(res.data);
     }
     return res.data;
   } catch(e) {
     if (typeof successCallback === "function") {
       errorCallback(e);
     }
     return e;
   }
 };

 export async function patchProfile(profile, successCallback, errorCallback) {
   let path = '/profile';
   let init = {
     body: profile,
     headers: {},
     response: true,
     queryStringParameters: {},
   };
   try {
     let res = await API.patch(apiName, path, init);
     if (typeof successCallback === "function") {
       successCallback(res.data);
     }
     return res.data;
   } catch(e) {
     if (typeof successCallback === "function") {
       errorCallback(e);
     }
     return e;
   }
 };

 export async function deleteProfile(id, successCallback, errorCallback) {
   let path = '/profile/id/'.concat(id);
   let init = {
     headers: {},
     response: true,
     queryStringParameters: {},
   };
   try {
     let res = await API.del(apiName, path, init);
     if (typeof successCallback === "function") {
       successCallback(res.data);
     }
     return res.data;
   } catch(e) {
     if (typeof successCallback === "function") {
       errorCallback(e);
     }
     return e;
   }
 };

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
