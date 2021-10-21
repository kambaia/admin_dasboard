
export type SignUpUser={
	account: {email:string | undefined | null, studentNumber: number }
    fullName: string | undefined | null,
    access: number,
    profilePhoto?: string | undefined | null,
    type: string,
    active: boolean,
    phoneNumber?: string,
    creatAt?:any,
    id?: string
  }

  export interface UserLogged{
    type: string | undefined | null,
    access:string,
    profilePhoto?: string | undefined | null,
    phoneNumber?: string | undefined | null,
    fullname?: string | undefined | null,
    id: string | undefined | null,
  }

export interface SignInData {
    email: string, password: string,
  }
  