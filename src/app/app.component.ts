import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   weatherData?: WeatherData;
   cityName: string = "Wellington";

   constructor(private weatherService: WeatherService){

   }

   ngOnInit(): void {
      this.getWeatherDate(this.cityName);
   }

   onSubmit(){
      this.getWeatherDate(this.cityName);
      this.cityName = '';
   }

   private getWeatherDate(cityName: string){
      this.weatherService.getWeatherData(cityName)
      .subscribe({
         next: (response) => {
            this.weatherData = response;
            console.log(response);
         }
      })
   }
}
