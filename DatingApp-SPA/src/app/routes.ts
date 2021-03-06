import {Routes} from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-details.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessageResolver } from './_resolvers/message.resolver';

// order of routing is important
export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent,
                resolve: {users: MemberListResolver}
            },
            {
                path: 'member/edit',
                component: MemberEditComponent,
                resolve  : {user: MemberEditResolver},
                canDeactivate: [PreventUnsavedChanges]
            },
            { path: 'members/:id',
                component: MemberDetailComponent,
                resolve  : {user: MemberDetailResolver}
            },
            { path: 'messages', component: MessagesComponent, resolve: {messages: MessageResolver}},
            { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
