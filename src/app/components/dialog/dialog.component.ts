import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn : string = "save";
  actionBtn2 : string = "save";

  id: string | null;

  constructor(private formBuilder : FormBuilder,
     private api : UsersService,
      @Inject(MAT_DIALOG_DATA) public editData : any,
       private dialogRef : MatDialogRef<DialogComponent>,
       private aRouter: ActivatedRoute,
       private toastr: ToastrService) {
        this.id = this.aRouter.snapshot.paramMap.get('id');
        }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name : ['',Validators.required],
      lastname : ['',Validators.required],
      address : ['',Validators.required],
      date : ['',Validators.required],
      gender : ['',Validators.required],
      age : ['',Validators.required]

    });

    if(this.editData){

      this.actionBtn = "update";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['lastname'].setValue(this.editData.lastname);
      this.productForm.controls['address'].setValue(this.editData.address);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['gender'].setValue(this.editData.gender);
      this.productForm.controls['age'].setValue(this.editData.age);
      
    }
  }

  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){

        this.api.posProduct(this.productForm.value);
        this.toastr.success('The product was registered successfully!', 'Producto Registrado!');
        this.productForm.reset();
        this.dialogRef.close('save');
      }
    }else{
      this.updateProduct();
    }

  }   
  
  updateProduct(){
    this.api.putProducto(this.productForm.value, this.editData)
    this.productForm.reset();
    this.dialogRef.close('update');
    this.toastr.success('The product was updated successfully!', 'Updated Product!');

  }

}
