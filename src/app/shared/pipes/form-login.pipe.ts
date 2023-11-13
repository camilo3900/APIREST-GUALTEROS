import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formLogin'
})
export class FormLoginPipe implements PipeTransform {

  transform(loginInput: ValidationErrors|undefined|null, ...args: unknown[]): unknown {
    const mensajes: Array<String> = [];
    if(!loginInput) return '';

    if('required' in loginInput){
      mensajes.push("Campo Obligatorio");
    }
    if('email' in loginInput){
      mensajes.push("Escriba un correo válido!");
    }
    if ('pattern' in loginInput) {
      mensajes.push("La contraseña debe contener entre 9 y 15 caracteres, al menos una letra, un número y un punto");
    }
    return mensajes.join(". ");
  }

}
