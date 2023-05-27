import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { timeout } from 'rxjs';

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
  @ViewChild('nameFieldError') nameFieldError!: ElementRef;
  @ViewChild('emailFieldError') emailFieldError!: ElementRef;
  @ViewChild('messageFieldError') messageFieldError!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  @ViewChild('sentMessage') sentMessage!: ElementRef;

  validateInput(id) {
    let sendBtn = this.sendBtn.nativeElement;
    let field = this.checkInputName(id);
    let noError;

    if(id == 'nameField') {
      noError = this.checkName(field);
      this.errorTxtName(field);
    } else if(id == 'emailField') {
      noError = this.checkEmail(field);
      this.errorTxtEmail(field);
    } else if (id == 'messageField') {
      noError = this.checkMessage(field);
      this.errorTxtMessage(field);
    }

    if(noError === false) {
      field.classList.add('input-invalid');
      sendBtn.disabled = true;
    } else {
      this.enableButton();
    }
  }

  checkEnableButton() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    if(this.checkName(nameField) == true && this.checkEmail(emailField) == true 
       && this.checkMessage(messageField) == true) {
      return true;
    } else {
      return false;
    }
  }

  enableButton() {
    let sendBtn = this.sendBtn.nativeElement;

    if(this.checkEnableButton() == true) {
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
    const trimmedEmail = inputField.value.trim();

    const email = inputField.value.toLowerCase();

    const re = /\S+@\S+\.\S+/;

    if (!re.test(email) || trimmedEmail.includes(" ")) {
      return false;
    } else {
      return true;
    }
  }

  errorTxtEmail(inputField) {
    const errorEmail = this.emailFieldError.nativeElement;
    const trimmedEmail = inputField.value.trim();

    const email = inputField.value.toLowerCase();

    const re = /\S+@\S+\.\S+/;

    if (re.test(email) && !trimmedEmail.includes(" ")) {
      errorEmail.innerHTML = '';
    } else if(email.length < 1) {
      errorEmail.innerHTML = 'Pflichtfeld';
    } else {
      errorEmail.innerHTML = 'Ungültige E-Mail Adresse';
    }
  }

  checkMessage(inputField) {
    if(inputField.value.length > 25) {
      return true;
    } else {
      return false;
    }
  }

  errorTxtMessage(inputField) {
    const errorMessage = this.messageFieldError.nativeElement;

    if(inputField.value.length > 25) {
      errorMessage.innerHTML = '';
    } else if(inputField.value == 0) {
      errorMessage.innerHTML = 'Pflichtfeld';
    } else {
      errorMessage.innerHTML = 'Nachricht zu kurz';
    }
  }

  checkName(inputField) {
    const re = /^([^0-9]*)$/;

    if(inputField.value.length > 1 && re.test(inputField.value)) {
      return true;
    } else {
      return false;
    }
  }

  errorTxtName(inputField) {
    const errorName = this.nameFieldError.nativeElement;
    const re = /^([^0-9]*)$/;

    if(inputField.value.length > 1 && re.test(inputField.value)) {
      errorName.innerHTML = '';
    } else if(!re.test(inputField.value)) {
      errorName.innerHTML = 'Zahlen sind nicht erlaubt'
    } else if(inputField.value.length == 0){
      errorName.innerHTML = 'Pflichtfeld'; // Name ungültig
    } else if (inputField.value.length < 2) {
      errorName.innerHTML = 'Name zu kurz'
    } else {
      errorName.innerHTML = 'Pflichtfeld: Name ungültig';
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
    if(this.checkEnableButton() == true) {

      let nameField = this.nameField.nativeElement;
      let emailField = this.emailField.nativeElement; // NEU
      let messageField = this.messageField.nativeElement;
      // let sendBtn = this.sendBtn.nativeElement;

      // sende/warte Animation
      this.disableContactForm();

      let fd = new FormData();
      let requestingName = nameField.value + ' - [ ' + emailField.value + ' ] ';

      fd.append('name', requestingName);
      fd.append('message', messageField.value);
      fd.append('project', "mein@portfolio.de")
      //senden
      await fetch('https://alexander-lovasz.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      // Txt: Nachricht gesendet
      this.enableContactForm();
      this.showSentMessage();
      this.clearInputs();
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
  }

  showSentMessage() {
    let sentMessage = this.sentMessage.nativeElement;
    sentMessage.classList.remove('d-none');

    setTimeout(() => {
      sentMessage.classList.add('d-none');
    }, 2000);
  }

  disableContactForm() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendBtn.nativeElement.disabled = true;
  }

  enableContactForm() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendBtn.nativeElement.disabled = false;
  }

  clearInputs() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

}
