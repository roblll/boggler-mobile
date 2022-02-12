import Constants from 'expo-constants';

export const getURI =  () => {
  const { manifest } = Constants;
  let uri = '';
  if (__DEV__ && manifest?.debuggerHost) {
    uri = `http://${manifest.debuggerHost.split(":").shift()}:3000/test`;
  } else {
    uri = `http://ec2-3-145-50-179.us-east-2.compute.amazonaws.com`;
  }
  return uri
}