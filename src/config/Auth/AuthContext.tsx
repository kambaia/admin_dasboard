import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ModalLoand } from "../../components/Modal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Loading } from "../../styles/pages/homeStyles";
import { UserLogged, SignUpUser } from "../../types/types";
import colors from "../../styles/colors";

type AuthContextType = {
  user: any,
  };

interface Loading {
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const auth = getAuth()
const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user=> {
       if(user){
          const { uid, phoneNumber, photoURL, displayName} = user;
          if (!displayName) {
            throw new Error("Missing information from Google Account.");
          }
          setUser({uid, phoneNumber, displayName, photoURL});
       }
      setLoading(false);
    });

    return()=>{
       unsubscribe();
    }

  }, []);
  if (loading) {
    return (
      <>
        <ModalLoand open={open} setOpen={setOpen} loading={loading}>
          <Loading loading={true}>
            <AiOutlineLoading3Quarters size={30} color={colors.orange} />
          </Loading>
          <span>A carregar...</span>
        </ModalLoand>
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
