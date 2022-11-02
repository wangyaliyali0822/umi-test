import request from '../utils/request';

export const getHomeData = (params) => {
  return request.get('/api/getHomeList', { params });
};

export const updateHomeData = (params) => {
  return request.post('/api/upHomeList', { params });
};

export const apiOpenLogin = (params) => {
  return request.post('/open/login', { params });
};
