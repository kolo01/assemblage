import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { LocalStorageServiceService } from './core/services/allOthers/local-storage-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YELEMAN CI';
  constructor(private localeStore: LocalStorageServiceService){}
  isConnected = false;

  ngOnInit(): void {
    if(this.localeStore.getItem("IsConnected") != null){
      this.isConnected = true;
    }
  }

  logout(){
    this.localeStore.clear()
  }
}
