// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line: quotemark
import { CommonModule } from "@angular/common";

import {
  SettingsService,
  SidebarService,
  SharedService,
// tslint:disable-next-line: quotemark
} from "./service.index";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
     SidebarService,
      SharedService
    ]
})
export class ServiceModule {}
