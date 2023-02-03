import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ValdialogComponent } from '../valdialog/valdialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  title = 'AngularCrud';

  displayedColumns: string[] = ['name', 'lastname', 'date', 'address', 'gender', 'age', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : UsersService, private toastr: ToastrService){
    

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.dataSource = new MatTableDataSource(this.api.getProduct());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  editProduct(row : any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data : row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getAllProducts();
      }
      })
  }

  deleteProduct(row : any){
    this.dialog.open(ValdialogComponent, {
      width: '30%',
      data : row
    }).afterClosed().subscribe(val => {
      if(val === 'delete'){
        this.getAllProducts();
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
