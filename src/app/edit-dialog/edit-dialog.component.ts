import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  comments: string;
  status: string;
  statusArray = ["Open", "Closed"]

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    console.log("button clicked");

  }

}
