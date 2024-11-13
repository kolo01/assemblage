import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profils',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './profils.component.html',
  styleUrl: './profils.component.scss'
})
export class ProfilsComponent {
email = "konedieu5@gmail.com";
username= "Noobs225"
phone = "0545213919"
firstName = "KONE"
lastName = "KOLOTIOLOMAN DIEUDONNE"

formImage!: FormGroup

ngOnInit(): void {
  this.formImage = new FormGroup({
    image: new FormControl
  });
}





}
