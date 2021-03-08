import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}


  async loginWithGoogle(): Promise<firebase.User | null> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const response = await this.afAuth.signInWithPopup(provider);

      if (response.user) {
        localStorage.setItem('user', response.user.uid);
        return response.user;
      }
    }catch (error){
      console.log(error);
      localStorage.removeItem('user');
    }
    return null;
  }

  getCurrentUser(): Observable<firebase.User | null> {
    return this.afAuth.user;
  }

  async LogoutGoogle(): Promise<void> {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
    } catch (error) {
      console.log(error);
    }
  }
}
