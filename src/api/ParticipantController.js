import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getParticipantsByOwner(owner, successCallback, errorCallback) {
  let path = '/participant/owner/'.concat(owner);
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

export function getParticipantsByActivity(id, successCallback, errorCallback) {
  let path = '/participant/activity/'.concat(id);
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

export function postParticipant(participant, successCallback, errorCallback) {
  let path = '/participant';
  let init = {
    body: activity,
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

export function patchParticipant(participant, successCallback, errorCallback) {
  let path = '/participant';
  let init = {
    body: activity,
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

export function deleteParticipant(id, successCallback, errorCallback) {
  let path = '/participant/id/'.concat(id);
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
