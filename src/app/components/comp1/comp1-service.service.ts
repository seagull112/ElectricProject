import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MyNewServiceService {

  constructor(private _http:Http){
        console.log('Task Service Initiated...')
    }

    getTask(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://FKHADER01:3111/api/tasks')
              .map(res=> res.json())
              

    }

}

