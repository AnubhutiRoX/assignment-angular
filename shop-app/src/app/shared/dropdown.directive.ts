import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirectove {
    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}