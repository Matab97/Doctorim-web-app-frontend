export class DoctorSignUpData {
    private nom: string;
    private prenom: string;
    private specialite: string;
    private tel: string;
    private password: string;
    private role: string;

    constructor(nom: string, prenom: string, specialite: string, tel: string, role: string, password: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.specialite = specialite;
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

    getSpecialite(): string {
        return this.specialite;
    }

    getRole(): string {
        return this.role;
    }
}