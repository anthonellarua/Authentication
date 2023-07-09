import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe(() => {
      // Elimina el token del almacenamiento local
      localStorage.removeItem('token');
      // Redirige al usuario a la página de inicio de sesión u otra página deseada
      this.router.navigate(['/login']);
    });
  }
}
