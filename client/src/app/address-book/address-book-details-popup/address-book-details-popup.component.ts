import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-popup',
  templateUrl: './address-book-details-popup.component.html',
  styleUrl: './address-book-details-popup.component.scss'
})
export class AddressBookDetailsPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<AddressBookDetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Use your Person type here
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}