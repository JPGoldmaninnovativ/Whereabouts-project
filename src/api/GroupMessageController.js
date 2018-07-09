import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getGroupMessagesByOwner(owner, successCallback, errorCallback) {
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

export function getGroupMessagesByGroup(id, successCallback, errorCallback) {
  let path = '/message/group/group/'.concat(id);
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

export function getGroupMessagesById(id, successCallback, errorCallback) {
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

export function getGroupMessagesByParent(id, successCallback, errorCallback) {
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

export function postGroupMessage(message, successCallback, errorCallback) {
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

export function patchGroupMessage(message, successCallback, errorCallback) {
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

export function deleteGroupMessage(id, successCallback, errorCallback) {
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
