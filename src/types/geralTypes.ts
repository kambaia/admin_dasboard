
export type userInfo = {
	account?: {email?:string | undefined | null, studentNumber?: number }
    access: number,
    active: boolean,
    creatAt: any,
    fullName: string | null | undefined,
    phoneNumber: string | null | undefined,
    profilePhoto?: string | null | undefined,
    type: string,
    nacionality?: userNacionality,
    academy?:userAcademy

}
export interface UserInfoInser{
	   access: number,
		active: boolean,
		creatAt: any,
		fullName: string,
		phoneNumber: string,
		profilePhoto: string,
		type: string,
		email: string,
		studentNumber: 0,
		nacionality: string,
		county: string,
		neighborhood: string,
		province: string,
		academy: string,
		couse: string,
		group: string,
		startYear: string,
		stuentYear: string,
		univercity: string
}
export type userNacionality = {
    county?: string,
    province?: string,
    neighborhood?: string
}

export type userAcademy = {
    univercity?: string,
    startYear?: string,
    endYear?: string,
    couse?: string,
	group?: string,
	stuentYear?: string,
}
export type Exercise={
	title: string,
	exercise: string, 
	category: string, 
	description:string,
	 year_send: string, 
	 file: string, 
	 especially_for: string,
	 creatAt?: any
}