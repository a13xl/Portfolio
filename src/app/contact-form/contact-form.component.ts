import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;


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
