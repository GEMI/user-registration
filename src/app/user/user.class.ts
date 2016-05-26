export class User {
    constructor (
        public firstName: string,
        public lastName: string,
        public address1: string,
        public address2?: string,
        public city?: string,
        public zipCode?: string
    ) { }
}