import {Component, Input} from '@angular/core';

@Component({
    selector: 'snackbar',
    templateUrl: 'src/app/snackbar/snackbar.template.html'
})

export class SnackbarComponent {
    @Input() message: string;
}