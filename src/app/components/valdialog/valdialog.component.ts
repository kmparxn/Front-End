import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-valdialog',
  templateUrl: './valdialog.component.html',
  styleUrls: ['./valdialog.component.scss']
})
export class ValdialogComponent  implements OnInit  {
  
  constructor(private formBuilder : FormBuilder, 
    private toastr: ToastrService, 
    private api : UsersService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<ValdialogComponent>
    ){}

  ngOnInit(): void {
  }
  
    delProduct(){
      this.api.deleteUser(this.editData)
      this.dialogRef.close('delete');
      this.toastr.success('The product was deleted successfully!', 'Product Deleted!');
    }
}