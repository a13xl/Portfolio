import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  validateInput(id) {
    let sendBtn = this.sendBtn.nativeElement;
    let field = this.checkInputName(id);
    let noError;

    if(id == 'nameField') {
      noError = this.checkName(field);
    } else if(id == 'emailField') {
      noError = this.checkEmail(field);
    } else if(id == 'messageField') {
      noError = this.checkMessage(field);
    }

    if(noError === false) {
      field.classList.add('input-invalid');
      sendBtn.disabled = true;
    } else {
      this.enableButonByInput();
    }
  }

  enableButonByInput() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    if(this.checkName(nameField) == true && this.checkEmail(emailField) == true && this.checkMessage(messageField) == true) {
      sendBtn.disabled = false;
    } else {
      sendBtn.disabled = true;
    }
  }

  resetInputError(id) {
    let field = this.checkInputName(id);

    field.classList.remove('input-invalid');
  }

  checkEmail(inputField) {
    let email = inputField.value.toLowerCase();

    const re = /\S+@\S+\.\S+/;

    return re.test(email);
  }

  checkMessage(inputField) {
    if(inputField.value.length > 25) {
      return true;
    } else {
      return false;
    }
  }

  checkName(inputField) {
    if(inputField.value.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  checkInputName(id) {
    switch (true) {
      case id == 'nameField':
        let nameField = this.nameField.nativeElement;
        return nameField;
      case id == 'emailField':
        let emailField = this.emailField.nativeElement;
          return emailField;
      case id == 'messageField':
        let messageField = this.messageField.nativeElement;
          return messageField;
      default:
        break;
    }
  }

  async sendMail() {
    console.log('Sending Mail', this.contactForm);

    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement; // NEU
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    // sende/warte Animation

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    let fd = new FormData();
    let requestingName = nameField.value + ' - [ ' + emailField.value + ' ] ';

    fd.append('name', requestingName);
    fd.append('message', messageField.value);
    //senden
    await fetch('online Pfad zu PHP', {
      method: 'POST',
      body: fd
    });

    // Txt: Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }

}
