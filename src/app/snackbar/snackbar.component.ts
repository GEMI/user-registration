import {Component, Input} from '@angular/core';

@Component({
    selector: 'snackbar',
    templateUrl: './snackbar.template.html'
})

export class SnackbarComponent {
    @Input() message: string;
}
