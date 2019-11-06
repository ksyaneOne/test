import { success as noticeSuccess, error as noticeError } from 'react-notification-system-redux';
import logger from 'utils/logger';
import * as store from '../../store';
import history from '../../utils/history';
import * as ROUTES from '../../config/routes';


const initialConfig = {
  timeout: 10000,
  validateStatus: (status) => status,
};

function handleInterceptorsResponse(response) {
  if (response.status >= 400) {
    logger(response);
  }

  if (response.status === 401) {
    // token refresh
  }

  if (response.status === 430) {
    // logout

  }

  return response;
}

const handleInterceptorsError = (error) => {
  store.store.dispatch(noticeError({ message: error.message }));

  ({ error, data: {} });
};
export {
  initialConfig as default,
  handleInterceptorsResponse,
  handleInterceptorsError,
};
