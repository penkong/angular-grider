import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceHolderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
