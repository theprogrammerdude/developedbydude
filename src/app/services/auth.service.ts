import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);

  constructor() {}

  loginWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  logout = () => {
    return signOut(this.auth);
  };
}
