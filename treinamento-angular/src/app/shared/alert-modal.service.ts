import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum tiposAlerta{
    DANGER = 'danger',
    SUCCESS = 'success',
    INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {


  constructor(private modalService: BsModalService) { }
  
  private mostrarMensagem(mensagem: string, tipo: tiposAlerta){
    const bsModalRef : BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = tipo;
    bsModalRef.content.message = mensagem;
  }

  mostrarMensagemError(mensagem: string){
    this.mostrarMensagem(mensagem, tiposAlerta.DANGER);
  }

  mostrarMensagemSucesso(mensagem: string){
    this.mostrarMensagem(mensagem, tiposAlerta.SUCCESS);
  }

  mostrarMensagemInfo(mensagem: string){
    this.mostrarMensagem(mensagem, tiposAlerta.INFO);
  }

}
