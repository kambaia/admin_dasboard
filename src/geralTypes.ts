
export type userInfo = {
    access: number,
    active: boolean,
    creatAt: any,
    fullName: string | null | undefined,
    id: string |  undefined,
    phoneNumber: string | null | undefined,
    profilePhoto?: string | null | undefined,
    type: string,
    email: string | null | undefined,
    studentNumber: number,
    stuentYear: string,
    group: string
    nacionality?: userNacionality,
    academy?:userAcademy

}

export type userNacionality = {
    county: string,
    province: string,
    neighborhood: string

}

export type userAcademy = {
    univercity: string,
    startYear: string,
    endYear: string,
    couse: string
}