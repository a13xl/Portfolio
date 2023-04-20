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
    let field = this.checkInputName(id);
    let error;

    if(id == 'nameField') {
      error = this.checkName(field);
    } else if(id == 'emailField') {
      error = this.checkEmail(field);
    } else if(id == 'messageField') {
      error = this.checkMessage(field);
    } else {
      // enable send button
    }

    if(error === true) {
      field.classList.add('input-invalid');
    }
  }

  resetInputError(id) {
    let field = this.checkInputName(id);

    field.classList.remove('input-invalid');
  }

  checkEmail(inputField) {
    debugger;
    let email = inputField.value.name.toLowerCase();

    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  checkMessage(inputField) {
    if(inputField.value.length > 10) {
      return false;
    } else {
      return true;
    }
  }

  checkName(inputField) {
    if(inputField.value.length > 1) {
      return false;
    } else {
      return true;
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
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    // sende/warte Animation

    nameField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('online Pfad zu PHP', {
      method: 'POST',
      body: fd
    });

    // Txt: Nachricht gesendet
    nameField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }

}
