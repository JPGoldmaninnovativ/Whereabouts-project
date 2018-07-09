import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getGroupsByOwner(owner, successCallback, errorCallback) {
  let path = '/group/owner/'.concat(owner);
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

export function getGroupsById(id, successCallback, errorCallback) {
  let path = '/group/id/'.concat(id);
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

export function getGroupsByCategory(category, successCallback, errorCallback) {
  let path = '/group/category/'.concat(category);
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

export function getGroupsByTitle(title, successCallback, errorCallback) {
  let path = '/group/title/'.concat(title);
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

export function postGroup(group, successCallback, errorCallback) {
  let path = '/group';
  let init = {
    body: group,
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

export function patchGroup(group, successCallback, errorCallback) {
  let path = '/group';
  let init = {
    body: group,
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

export function deleteGroupsById(id, successCallback, errorCallback) {
  let path = '/group/id/'.concat(id);
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
