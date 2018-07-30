import { API } from 'aws-amplify';

const apiName = 'Whaapp';


/* Exmple participant object
 * {
 *   owner: "UUID",
 *   activity: "UUID",
 *   status: "status"
 * }
 */

export async function getMyParticipants(successCallback, errorCallback) {
  let path = '/participant';
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

export async function getParticipantsByOwner(owner, successCallback, errorCallback) {
  let path = '/participant/owner/'.concat(owner);
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

export async function getParticipantsByActivity(id, successCallback, errorCallback) {
  let path = '/participant/activity/'.concat(id);
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

export async function postParticipant(participant, successCallback, errorCallback) {
  let path = '/participant';
  let init = {
    body: activity,
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

export async function patchParticipant(participant, successCallback, errorCallback) {
  let path = '/participant';
  let init = {
    body: activity,
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

export async function deleteParticipant(id, successCallback, errorCallback) {
  let path = '/participant/id/'.concat(id);
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
