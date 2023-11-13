import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from 'src/models/loginpayload.interface';
import { User } from 'src/models/users.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();
  constructor(private httpClient: HttpClient, private router: Router) { }
  /* Inicio de sesion */
  login(payload: LoginPayload): void {
    /* Implementacion de peticion get */
    this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?correo=${payload.correo}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Usuario o contrasena invalidos');
          } else {
            const authUser = response[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token)
            console.log("OK");

            this.router.navigate(['/dashboard/home']);
          }
        },

      });
  }
  /* Verifia el token */
  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            /* Reescribimos el token */
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      );
  }
  /* Para cerrar sesion */
  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
