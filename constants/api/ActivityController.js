import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export async function getActivitiesByOwner(owner, successCallback, errorCallback) {
  let path = '/activity/owner/'.concat(owner);
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

export async function getActivitiesById(id, successCallback, errorCallback) {
  let path = '/activity/id/'.concat(id);
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

export async function getActivitiesByGroup(id, successCallback, errorCallback) {
  let path = '/activity/group/'.concat(id);
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

export async function getActivitiesByTitle(title, successCallback, errorCallback) {
  let path = '/activity/title/'.concat(title);
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

export async function getActivitiesByStartDate(date, successCallback, errorCallback) {
  let path = '/activity/startdate/'.concat(date);
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

export async function getActivitiesByEndDate(date, successCallback, errorCallback) {
  let path = '/activity/enddate/'.concat(date);
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

export async function postActivity(activity, successCallback, errorCallback) {
  let path = '/activity';
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

export async function patchActivity(activity, successCallback, errorCallback) {
  let path = '/activity';
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

export async function deleteActivityById(id, successCallback, errorCallback) {
  let path = '/activity/id/'.concat(id);
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
