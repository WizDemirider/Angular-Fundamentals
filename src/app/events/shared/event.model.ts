export interface IEvent {
    id:number
    name:string
    organiser:string
    date:Date
    time:string
    price:number
    imageUrl:string
    location?:
    {
        address:string
        city:string
    }
    college_location?:
    {
        room:string
        department:string
    }
    sessions: ISession[]
}

export interface ISession {
    id:number
    name:string
    presenter:string
    duration:number
}