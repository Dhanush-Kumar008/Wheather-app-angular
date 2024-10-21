import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}



@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) {

   }

   getWeatherData(placename:string):Observable<WeatherData>{
       return this.http.get<WeatherData>('https://weather-api138.p.rapidapi.com/weather?city_name='+placename,{
        headers: {
          'x-rapidapi-key': 'f42f5b31b7mshc6f4f8826664045p17534cjsna5199a0df550',
          'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
        })
      
      } 

   
  }
      
     


