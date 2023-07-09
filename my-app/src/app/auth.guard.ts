import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // El token existe, el usuario está autenticado
      console.log(token);
      return true;
    } else {
      // El token no existe, el usuario no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }

}
