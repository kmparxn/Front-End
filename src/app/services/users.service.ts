import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  info = [{ _id: "62d07d3bbdde73f2ca9edb2p", name: "Moto", lastname: "Bogota", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2v", name: "Carro", lastname: "Medellin", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2w", name: "Moto", lastname: "Cali", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2y", name: "Bus", lastname: "Cali", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2c", name: "Bus", lastname: "Bogota", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, { _id: "s62d07d3bbdde73f2ca9edb2d", name: "Carro", lastname: "Medellin", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, {_id: "262d07d3bbdde73f2ca9edb2e", name: "Moto", lastname: "Cali", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}, {_id: "s362d07d3bbdde73f2ca9edb2f", name: "Carro", lastname: "Medellin", date: "2022-07-12T05:00:00.000Z", address: "13:00",
  gender: 50, age: "Santafe De Bogota"}]

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

  deleteProducto(id: string) {

    this.info = this.info.filter(function(item) {
      return item._id !== id
    });
    
    return this.info  
   
  }

}
