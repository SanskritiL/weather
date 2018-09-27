import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

 city;
 apikey='25299114f3b698c64cd83719c107cffc';
 url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';
  }

getWeather(city){
  return this.http.get(this.url+city+'&units=metric&APPID='+this.apikey);
}
  
  
}
