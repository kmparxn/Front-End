import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ValdialogComponent } from '../valdialog/valdialog.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { merge, Observable, of as observableOf, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  title = 'AngularCrud';
  isLoading = true;
  pageSizes = [5, 10, 20 ];
  page: number = 1;
  size : number = 10;
  length: number = 20;
  pageIndex: number = 2;


  displayedColumns: string[] = ['name', 'lastName', 'date', 'adress', 'gender', 'age', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : UsersService, private toastr: ToastrService){
    
  }
  ngOnInit(): void {
    this.getAllProducts(this.page, this.size);
  }

  // Dialog para crear o editar usuarios
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getAllProducts(this.page, this.size);
      }
    })
  }

  // Obtener todos los usuarios
  getAllProducts(pi: number, ps:number){
    this.api.getUserList(pi, ps).subscribe({
      next: (res) =>{
        console.log(res.data)
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
        this.isLoading = false;

      }
    });
  }

  // Editar un usuario
  editProduct(row : any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data : row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getAllProducts(this.page, this.size);
      }
      })
  }
  // Eliminar un usuario
  deleteProduct(row : any){
    this.dialog.open(ValdialogComponent, {
      width: '30%',
      data : row
    }).afterClosed().subscribe(val => {
      if(val === 'delete'){
        this.getAllProducts(this.page, this.size);
      }
    })

  }
  //Manejador de eventos de la paginacion
  onPaginateChange(event: PageEvent){
    console.log(event);
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllProducts(this.page, this.size)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
