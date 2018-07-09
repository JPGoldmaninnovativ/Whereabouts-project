import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getActivityMessagesByOwner(owner, successCallback, errorCallback) {
  let path = '/message/group/owner/'.concat(owner);
  let init = {
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.get(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function getActivityMessagesByActivity(id, successCallback, errorCallback) {
  let path = '/message/group/activity/'.concat(id);
  let init = {
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.get(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function getActivityMessagesById(id, successCallback, errorCallback) {
  let path = '/message/group/id/'.concat(id);
  let init = {
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.get(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function getActivityMessagesByParent(id, successCallback, errorCallback) {
  let path = '/message/group/parent/'.concat(id);
  let init = {
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.get(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function postActivityMessage(message, successCallback, errorCallback) {
  let path = '/message/group';
  let init = {
    body: message,
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.post(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function patchActivityMessage(message, successCallback, errorCallback) {
  let path = '/message/group';
  let init = {
    body: message,
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.patch(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function deleteActivityMessage(id, successCallback, errorCallback) {
  let path = '/message/group/id/'.concat(id);
  let init = {
    headers: {},
    response: true,
    queryStringParameters: {},
  };
  API.del(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};
