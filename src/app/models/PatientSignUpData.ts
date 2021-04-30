export class PatientSignUpData {
    private nom: string;
    private prenom: string;
    private tel: string;
    private role: string;
    private password: string;

    constructor(nom: string, prenom: string,  tel: string, role: string, password: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.role = role;
        this.password = password;
    }

    getTel(): string {
        return this.tel;
    }

    getPassword(): string {
        return this.password;
    }
    
    getNom(): string {
        return this.nom;
    }

    getPrenom(): string {
        return this.prenom;
    }

    getRole(): string {
        return this.role;
    }

}