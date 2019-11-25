import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  tablaData = {};
  public userData: any[];
  public userKey: any;

  constructor(private serv: TableDataService) { }

  public userForm = new FormGroup({
    userName: new FormControl(),
    email: new FormControl()
  });

  ngOnInit() {
    this.serv.sendGetResponce().subscribe(res => {
      this.tablaData = res;
      this.userData = Object.entries(res).map(list => Object.assign({}, { id: list[0] }, list[1]));
    },
      err => {
        console.log(err)
      }
    );
  }
  onFormSubmit(formData) {
    this.serv.submitData(formData).subscribe(res => {
      console.log('date', res)
    });
  }


}
