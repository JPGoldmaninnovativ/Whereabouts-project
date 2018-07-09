import { API } from 'aws-amplify';

const apiName = 'Whaapp';

export function getActivitiesByOwner(owner, successCallback, errorCallback) {
  let path = '/activity/owner/'.concat(owner);
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

export function getActivitiesById(id, successCallback, errorCallback) {
  let path = '/activity/id/'.concat(id);
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

export function getActivitiesByGroup(id, successCallback, errorCallback) {
  let path = '/activity/group/'.concat(id);
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

export function getActivitiesByTitle(title, successCallback, errorCallback) {
  let path = '/activity/title/'.concat(title);
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

export function getActivitiesByStartDate(date, successCallback, errorCallback) {
  let path = '/activity/startdate/'.concat(date);
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

export function getActivitiesByEndDate(date, successCallback, errorCallback) {
  let path = '/activity/enddate/'.concat(date);
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

export function postActivity(activity, successCallback, errorCallback) {
  let path = '/activity';
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

export function patchActivity(activity, successCallback, errorCallback) {
  let path = '/activity';
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

export function deleteActivityById(id, successCallback, errorCallback) {
  let path = '/activity/id/'.concat(id);
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
