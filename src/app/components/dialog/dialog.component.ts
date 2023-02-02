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

  freshnessList = ["Medellin", "Bogota", "Cali"];
  productForm !: FormGroup;
  actionBtn : string = "save";
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
      productname : ['',Validators.required],
      category : ['',Validators.required],
      date : ['',Validators.required],
      freshness : ['',Validators.required],
      price : ['',Validators.required],
      comment : ['',Validators.required]

    });

    if(this.editData){

      this.actionBtn = "update";
      this.productForm.controls['productname'].setValue(this.editData.productname);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['comment'].setValue(this.editData.comment);
      
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
