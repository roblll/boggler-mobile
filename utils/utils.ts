import Constants from 'expo-constants';

export const getURI =  () => {
  const { manifest } = Constants;
  let uri = '';
  if (__DEV__ && manifest?.debuggerHost) {
    uri = `http://${manifest.debuggerHost.split(":").shift()}:3000/test`;
  } else {
    uri = `http://boggler-env.eba-v5yi4ctv.us-east-2.elasticbeanstalk.com/test`;
  }
  return uri
}