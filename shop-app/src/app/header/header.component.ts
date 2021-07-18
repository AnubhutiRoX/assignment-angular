import {Component, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

    isAuthenticated: boolean = false;
    private userSubs: Subscription;

    constructor(private dataStore: DataStorageService, private authService: AuthService){}
    onSaveData() {
        this.dataStore.storeRecipes();
    }
    onFetchData() {
        this.dataStore.getRecipes().subscribe();
    }

    ngOnInit() {
        this.userSubs = this.authService.user.subscribe(user => {
            console.log(user);
            this.isAuthenticated = !!user;
        })
    }

    ngOnDestroy() {
        this.userSubs.unsubscribe();
    }
}