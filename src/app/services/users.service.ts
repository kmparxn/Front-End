import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  info = [{ _id: "62d07d3bbdde73f2ca9edb2p", name: "Sara", lastname: "Torres", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "male", age: "12"}, { _id: "62d07d3bbdde73f2ca9edb2v", name: "Andrea", lastname: "Ospina", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "female", age: "14"}, { _id: "62d07d3bbdde73f2ca9edb2w", name: "Catalina", lastname: "Montoya", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "male", age: "20"}, { _id: "62d07d3bbdde73f2ca9edb2y", name: "Sandra", lastname: "Herrera", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "male", age: "40"}, { _id: "62d07d3bbdde73f2ca9edb2c", name: "Valentina", lastname: "Velez", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "female", age: "20"}, { _id: "s62d07d3bbdde73f2ca9edb2d", name: "Daniela", lastname: "Smith", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "male", age: "34"}, {_id: "262d07d3bbdde73f2ca9edb2e", name: "Victor", lastname: "Jaramillo", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "male", age: "12"}, {_id: "s362d07d3bbdde73f2ca9edb2f", name: "Felipe", lastname: "Vasquez", date: "2022-07-12T05:00:00.000Z", address: "Carrera 12 # 21-12",
  gender: "female", age: "20"}]

  constructor() { }

  posProduct(data: any){
    return  this.info.unshift(data)
  }

  getProduct() {
    return this.info;
  }

  putProducto(data : any, id: any) {

    data._id = id._id;

    this.info = this.info.map(item => {

      return item._id === data._id ? item = data : item;

    });

    return this.info


  }

  deleteProducto(data: any) {

    this.info = this.info.filter(function(item) {
      return item._id !== data._id
    });
    
    return this.info  
   
  }

}
