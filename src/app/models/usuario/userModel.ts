export class Usuario{
    public nombre: String;
    public apellido: String;
    public edad: Number;
    public email: String;

    constructor(nombre:String, apellido:String, edad:Number, email:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email=email;
    }
}
