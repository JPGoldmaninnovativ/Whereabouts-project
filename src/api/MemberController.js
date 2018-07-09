import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getMembersByOwner(owner, successCallback, errorCallback) {
  let path = '/member/owner/'.concat(owner);
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

export function getMembersByGroup(id, successCallback, errorCallback) {
  let path = '/member/group/'.concat(id);
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

export function postMember(owner, group, successCallback, errorCallback) {
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
  API.post(apiName, path, init).then(response => {
      successCallback(response.data);
  }).catch(error => {
      errorCallback(error);
  });
};

export function deleteMemberByGroup(id, successCallback, errorCallback) {
  let path = '/member/group/'.concat(id);
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
