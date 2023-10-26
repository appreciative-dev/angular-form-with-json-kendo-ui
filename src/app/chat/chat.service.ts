import { Injectable } from '@angular/core';
import { departamentos, dichos, platos } from './chat.data';

@Injectable()
export class ChatService {
  readonly departamentos = departamentos;
  readonly dichos = dichos;
  readonly platos = platos;

  chatBotReply() {
    const departamentoIndex = Math.floor(
      Math.random() * this.departamentos.length
    );
    const dichosIndex = Math.floor(Math.random() * this.dichos.length);
    const platosIndex = Math.floor(Math.random() * this.platos.length);
    return (
      'En ' +
      this.departamentos[departamentoIndex] +
      ' decimos ' +
      this.dichos[dichosIndex] +
      '. Toma mas ' +
      this.platos[platosIndex] +
      ' por favor!'
    );
  }
}
