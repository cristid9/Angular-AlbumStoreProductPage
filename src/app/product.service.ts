import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {

  private _http: Http;
  private _albumUrl: string = "../assets/album.json";


  constructor() { }

}
