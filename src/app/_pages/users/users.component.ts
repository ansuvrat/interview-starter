import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent {
  
  constructor(private _snackBar: MatSnackBar) {

  }
  showEditData: boolean = false;
  setEditUserId: any=0
  saveButton: string = "Submit";
  durationInSeconds = 5;
  updownbuttonclass="glyphicon glyphicon-arrow-up";
  selectedupdownbuttonclass="glyphicon glyphicon-arrow-down";
  typeId:number=1;

  userDataArr = [
    {
      id: '10001',
      name: 'Oliever False',
      age: 30,
      salary: 100000,
      email: 'olieverfalse@gmail.com'
    },
    {
      id: '10002',
      name: 'John',
      age: 40,
      salary: 40000,
      email: 'john@gmail.com'
    },
    {
      id: '10003',
      name: 'Mery',
      age: 35,
      salary: 30000,
      email: 'mery@gmail.com'
    },
    {
      id: '10004',
      name: 'Tim',
      age: 30,
      salary: 50000,
      email: 'tim@gmail.com'
    },
    {
      id: '10004',
      name: 'Peater',
      age: 20,
      salary: 30000,
      email: 'peater@gmail.com'
    },
    {
      id: '10004',
      name: 'Aline',
      age: 27,
      salary: 35000,
      email: 'alina@gmail.com'
    }
  ]


  showHdideEdit(userId: any, type: any) {
    
    this.typeId=(type==1)?2:1
    this.showEditData = (this.typeId == 1) ? true : false
    this.setEditUserId = (type==1)?userId:0
  }
  clearEditData() {
    this.showEditData = false
    this.typeId=1;
    this.setEditUserId = 0
  }

  editUserData(val1: any, val2: any, val3: any, val4: any) {
    if (val1 == '' || val2 == '' || val3 == '' || val4 == '') {
      this._snackBar.open("Invalid Data ", 'Ok', { verticalPosition: 'bottom', panelClass: ['snackbar-error'] });
    } else {
      this.saveButton = 'Loading..'
      let itemDasta = this.userDataArr.find(x => x.id == this.setEditUserId)
      if (itemDasta) {
        itemDasta.name = val1
        itemDasta.email = val2
        itemDasta.age = val3
        itemDasta.salary = val4
      }
      this._snackBar.open("Information has been updared successfully.", 'Ok', { verticalPosition: 'bottom', panelClass: ['snackbar-success'] });
      this.showEditData = false
      this.setEditUserId = 0
      this.saveButton = "Submit"
    }

  }
  
  numericOnly(event:any): boolean {    
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
}


}
