import { auth,  } from "./firebase/config";
export const getUserProfile = () => {
  return auth.currentUser; // null if no user
}

export const formaTime = (secs:any) => {
  let minute = Math.floor(Math.round(secs) / 60) || 0;
  let seconds = Math.round(secs) - minute * 60 || 0;
  return (minute + ":" + (Math.round(seconds) <10 ? "0" : "") + Math.round(seconds))
};

export const onlyNumber= (number: any)=> {
	var numsStr = number.replace(/[^0-9]/g, '');
	return parseInt(numsStr);
}
export const onlyLetters = (letter: any)=> {
return letter.replace(/[^a-zA-Z]+/g, ' ');
}