/* eslint-disable */
import dayjs from 'dayjs';
import request from './request';
export const format = (time, f = 'YYYY-MM-DD') => dayjs(time).format(f) + 'hello11';
export const http = (options) => request(options);
