import { API } from 'aws-amplify';

const apiName = 'Whaapp';

/* Exmple activityMessage object
 * {
 *   owner: "UUID",
 *   id: "UUID",
 *   activity: "UUID",
 *   message: "Message.",
 *   parent: "UUID",
 *   creationdate: "date",
 *   editdate: "date",
 *   location: "location"
 * }
 */

export async function getActivityMessagesByOwner(owner, successCallback, errorCallback) {
  let path = '/message/group/owner/'.concat(owner);
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

export async function getActivityMessagesByActivity(id, successCallback, errorCallback) {
  let path = '/message/group/activity/'.concat(id);
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

export async function getActivityMessagesById(id, successCallback, errorCallback) {
  let path = '/message/group/id/'.concat(id);
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

export async function getActivityMessagesByParent(id, successCallback, errorCallback) {
  let path = '/message/group/parent/'.concat(id);
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

export async function postActivityMessage(message, successCallback, errorCallback) {
  let path = '/message/group';
  let init = {
    body: message,
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

export async function patchActivityMessage(message, successCallback, errorCallback) {
  let path = '/message/group';
  let init = {
    body: message,
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

export async function deleteActivityMessage(id, successCallback, errorCallback) {
  let path = '/message/group/id/'.concat(id);
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
