import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {UserService} from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/Message';
import { AuthService } from '../_services/Auth.service';

@Injectable()

export class MessageResolver implements Resolve<Message[]> {

    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService
            .getMessages(this.authService.decodeToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
            .pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving  data');
                    this.router.navigate(['/home']);
                    return of(null);
                })
        );
    }
}
