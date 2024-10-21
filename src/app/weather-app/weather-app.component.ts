import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { WeatherData } from '../services/weather-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent  {
  placename:string=""
  constructor(private weatherservice:WeatherServiceService){
   

  }

  WeatherData?:WeatherData

 


  getWeather(placename:string){
    if(placename==""){
      alert("pls enter city,country or state")
      return;
    }
    this.weatherservice.getWeatherData(placename).subscribe({
      next:(res)=>{
        this.WeatherData=res
        console.log(this.WeatherData)
       
  }
    })
  }



}
