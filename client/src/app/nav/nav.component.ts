import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AccountService} from "../_services/account.service";
import {NgIf} from "@angular/common";
import {LogicalFileSystem} from "@angular/compiler-cli";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    BsDropdownModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe(
      {
        next : response => {
          console.log(response);
        }
      }
    )
  }

  logout(){
    this.accountService.logout()
  }

}