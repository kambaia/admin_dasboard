

export  type QuestionTypes  = {
  idUser:string | null | undefined,
  author?: string | null | undefined,
  avatar?: string | null | undefined,
  about: string,
  question: string,
  answers?: AnswersTypes,
  validate?: [],
  validateMaster?:[],
  creatAt:any
}

export type AnswersTypes = {
    user?: string,
    userName?: string | null | undefined,
    answer: string,
    file?:string,
    creatAt:any,
    right?: boolean,
    almost?: boolean,
    commentsTypes?: CommentsTypes,
    id?:string
}


export type CommentsTypes = {
  user?: string,
  userName?: string | null | undefined,
  comment: string,
  file?:string,
  creatAt:any,
  id?:string
}