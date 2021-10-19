import { auth,  } from "./firebase/config";
export const getUserProfile = () => {
  return auth.currentUser; // null if no user
}

export const formaTime = (secs:any) => {
  let minute = Math.floor(Math.round(secs) / 60) || 0;
  let seconds = Math.round(secs) - minute * 60 || 0;
  return (minute + ":" + (Math.round(seconds) <10 ? "0" : "") + Math.round(seconds))
};