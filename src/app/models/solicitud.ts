export interface Solicitud {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    descripcion: string;
}

export interface AuthResponse{
    ok: boolean,
    text: string,
}
