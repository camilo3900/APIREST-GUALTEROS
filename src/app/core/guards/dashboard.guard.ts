import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log("DASHBOARD GUARD"); 
    /* Para validar que hay usuario autenticado */
  return authService.verifyToken()
  .pipe(map((isAuthenticates)=>{
   return isAuthenticates ? true : router.createUrlTree(['/auth/login']);  
  }))
}
     
  



