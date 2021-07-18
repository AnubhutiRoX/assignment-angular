import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface authResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToke: string;
    expiresIn: string;
    localId: string;
    registered?: boolean; // used in login only
}
@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null); // get access to the previously emitted value

    constructor(private http: HttpClient, private router: Router) {}

    handleAuthentication(email: string, localId: string, idToken: string, expiresIn: string) {
        console.log('handleAuth');
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, localId, idToken, expirationDate);
        this.user.next(user);
    }

    signup (email: string, password: string) {
        return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPvibywdnVxWAkrMlDz7pWuvk39t7iCIk', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(tap(res=> {
            this.handleAuthentication(res.email, res.localId, res.idToken, res.expiresIn);
        }));
    }

    login (email: string, password: string) {
        return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPvibywdnVxWAkrMlDz7pWuvk39t7iCIk', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(tap(res=> {
            this.handleAuthentication(res.email, res.localId, res.idToken, res.expiresIn);
        }));
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
    }
}