import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  everybody;

  constructor(public callNumber: CallNumber, public contacts: Contacts) {
    this.everybody = this.contacts.find(["name", "phoneNumbers"]);
  }

  callContact(number: string) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
