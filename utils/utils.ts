import Constants from "expo-constants";

const { manifest } = Constants;
let uri = "";
if (__DEV__) {
  uri = `http://${manifest.debuggerHost.split(":").shift()}:3000`;
} else {
  uri = "";
}