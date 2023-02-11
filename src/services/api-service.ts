import concerts from './concerts.spec.json'

export type Concert = {
  id : string
  name : string,
  date : Date | string,
  ticketsPrinted? : number,
  ticketsSold? : number
}

export type Session = {
  token : string,
  username : string
}

export const getConcerts = async () : Promise<Concert[]> => concerts
export const automatedLogin = async () : Promise<Session> => ({token : `ABCD-1234`, username : `Code Whisperer`})