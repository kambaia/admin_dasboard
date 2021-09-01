

export  type Question  = {
  idUser:string | null | undefined,
  author?: string | null | undefined,
  avatar?: string | null | undefined,
  about: string,
  question: string,
  answers?: Answers,
  validate?: [],
  validateMaster?:[],
  creatAt:any
}

export type Answers = {
    user: string,
    answers: string,
    file?:string,
    creatAt:any
}