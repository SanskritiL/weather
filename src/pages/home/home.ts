import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  icon:string;
  location:{
    city:string
  }
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider) {
     
  }
  ionViewWillEnter(){
    this.location = {
      city: 'London'
    }
    this.weatherProvider.getWeather(this.location.city)
    .subscribe(weather =>{
       this.weather = weather;
      var temp = this.weather.main.temp;
      var icon =this.weather.weather[0].icon;
       console.log(icon);
    }
      );
      
  }

  
}
