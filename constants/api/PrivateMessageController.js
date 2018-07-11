import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export async function getPrivateMessagesByOwner(owner, successCallback, errorCallback) {
  let path = '/message/private/owner/'.concat(owner);
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

export async function getPrivateMessagesByRecipient(id, successCallback, errorCallback) {
  let path = '/message/private/recipiant/'.concat(id);
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

export async function getPrivateMessagesById(id, successCallback, errorCallback) {
  let path = '/message/private/id/'.concat(id);
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

export async function postPrivateMessage(message, successCallback, errorCallback) {
  let path = '/message/private';
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

export async function patchPrivateMessage(message, successCallback, errorCallback) {
  let path = '/message/private';
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

export async function deletePrivateMessage(id, successCallback, errorCallback) {
  let path = '/message/private/id/'.concat(id);
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
