/**
  * @cwb
  * [User Class] - 
  **/
export class User {
    constructor (
        // Assigns a random id 
        public _id: number = Math.floor(Math.random()*100),
        // Math.floor(Math.random()*100),
        public first_name: string = '',
        public last_name: string =  '',
        public email: string = ''
    ){}
}
