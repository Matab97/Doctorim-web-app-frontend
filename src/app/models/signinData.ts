export class SignInData {
    private tel: string;
    private password: string;

    constructor(tel: string, password: string) {
        this.tel = tel;
        this.password = password;
    }

    getTel(): string {
        return this.tel;
    }

    getPassword(): string {
        return this.password;
    }
}