import { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/config';
import { ModalLoand } from '../../components/Modal'
import { AiOutlineLoading3Quarters} from "react-icons/ai";
import { Loading } from '../../styles/pages/homeStyles'
interface AuthContextState {
   userId?: string,
}
interface Loading{
   loading: boolean
 }
 
const AuthContext = createContext<AuthContextState>({} as AuthContextState);
const AuthProvider: React.FC = ({ children }) => {
   const [uid, setUid] = useState<string>();
   const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(true);
   const [artistLogged, setArtistLogged] = useState<any>();
   const [graphicsData, setgraphicsData] = useState<any>([])

   useEffect(() => {
      auth().onAuthStateChanged((user) => {
         setUid(user?.uid);
         setArtistLogged(window.localStorage.getItem('artist'))
         setLoading(false);
      });
   }, []);
   if (loading) {
      return <>
            <ModalLoand open={open} setOpen={setOpen} loading={loading}>
                 <Loading loading={true}>
                     <AiOutlineLoading3Quarters size={30} color="#ff2a00"/>
                 </Loading>
                 <span>A carregar...</span>
         </ModalLoand></>;       
      }
  return (
     <AuthContext.Provider value={{ userId: uid}}>
               {children}
      </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider}
