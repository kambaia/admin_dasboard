
import React, { useState,useEffect, createContext } from "react";
interface DataContextState {
   _data?: any;
   showMenu:boolean;
   setShowMenu:(value: boolean) => void;
   close:any;
   setClose:(value: any) => void;
   setData:(value: string) => void;
}

const DatasContext = createContext<DataContextState>({} as DataContextState);

const DataProvider: React.FC = ({ children}) => {
  useEffect(() => {
 }, []); 
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [close, setClose] = useState<any>('none');
  

  return (
    <DatasContext.Provider value={{
      setShowMenu:setShowMenu, showMenu:showMenu,
      setData:setData, _data:data, setClose:setClose, close:close}}>
              {children}
     </DatasContext.Provider>
 );

};

export {DatasContext, DataProvider}