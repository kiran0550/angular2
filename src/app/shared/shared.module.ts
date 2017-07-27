import {NgModule} from '@angular/core';
import {HiddenDirective} from './hidden.directive';
import {UnderlineDirective} from './underline.directive'

@NgModule({
  declarations : [HiddenDirective, UnderlineDirective],
  exports : [HiddenDirective, UnderlineDirective]
})

export class SharedModule {
}

