import Alert from 'react-s-alert';

  export const handleWarning = () => {
    Alert.warning('Customer confirmation needed:', {
      position: 'top-right',
      effect: 'slide'
    });
  }

  export const handleInfo = () => {
    Alert.info('Customer confirmation needed:', {
      position: 'top-right',
      effect: 'slide'
    });
  }

  export const handleError = (error) => {
    Alert.error(error, {
      position: 'top-right',
      effect: 'slide',
      beep: 'http://s-alert-demo.meteorapp.com/beep.mp3',
      timeout: 10000
    });
  }

  export const handleSuccess = (message) => {
    Alert.success(message, {
      position: 'top-right',
      effect: 'slide'
    });
  }