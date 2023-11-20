import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
     console.log(this.email,this.password)
    fetch('https://localhost:8080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: this.email, password: this.password })
    })
    .then(response => response.json())
    .then(data => {
       
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  }
}
