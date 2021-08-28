
export interface SignUpUser{
    fullname: string,
    access: number,
    profilePhoto?: string,
    type: string,
    active: boolean,
    phoneNumber: string,
    account: { email: string, password: string},
    creatAt:any,
    id: string
  }

  export interface UserLogged{
    type: string | undefined | null,
    access:string,
    profilePhoto?: string | undefined | null,
    followers?: Array<string>,
    phoneNumber?: string | undefined | null,
    fullname?: string | undefined | null,
    documentId: string | undefined | null,
  }

export interface SignInData {
    email: string, password: string,
  }
  