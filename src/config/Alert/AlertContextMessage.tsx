
import React, { useState,useEffect, createContext } from "react";
interface AlertContextState {
   data: any;
   showAlert:boolean;
   setSweetalert:(value: any) => void;
   setShowAlert:(value: boolean) => void;
   setConfirm:(value: boolean) => void;
   confirm: boolean

}

const AlertContext = createContext<AlertContextState>({} as AlertContextState);

const AlertProvider: React.FC = ({ children}) => {
  useEffect(() => {
 }, []);
  const [sweetalert, setSweetalert] = useState({message: '', type:'', icon:'', header:''});
  const [showAlert, setShowAlert] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <AlertContext.Provider value={{ data: sweetalert, setSweetalert: setSweetalert, showAlert: showAlert, setShowAlert, setConfirm:setConfirm, confirm:confirm}}>
              {children}
     </AlertContext.Provider>
 );
};
export {AlertContext, AlertProvider}