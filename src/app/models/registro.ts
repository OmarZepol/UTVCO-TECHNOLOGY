export interface Registro {
    nombre: string;
    ape_m: string;
    ape_p: string;
    email: string;
    password: string;
    telefono: string;
}

export interface AuthResponse{
    ok: boolean,
    text: string,
}
