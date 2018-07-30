import { API } from 'aws-amplify';

const apiName = 'Whaapp';


/* Exmple member object
 * {
 *   owner: "UUID",
 *   group: "UUID"
 * }
 */

export async function getMyMembers(successCallback, errorCallback) {
  let path = '/member';
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

export async function getMembersByOwner(owner, successCallback, errorCallback) {
  let path = '/member/owner/'.concat(owner);
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

export async function getMembersByGroup(id, successCallback, errorCallback) {
  let path = '/member/group/'.concat(id);
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

export async function postMember(owner, group, successCallback, errorCallback) {
  let path = '/member';
  var body = {}
  if (owner) {
    body.owner = owner;
  }
  if (group) {
    body.group = group;
  }
  let init = {
    body: body,
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

export async function deleteMemberByGroup(id, successCallback, errorCallback) {
  let path = '/member/group/'.concat(id);
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
