import {Component, computed, input} from '@angular/core';
import {User} from "../../model/user";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users = input<User[]>([])
  search = input<string | undefined>(undefined)

  searchedUsers = computed(() => this.users()?.filter(user => this.filterUsers(user, this.search())))

  private filterUsers(user: User, search: string | undefined) {
    if (!search) return true;

    return user.ciam_id.includes(search) || user.email.includes(search) || user.first_name.includes(search) || user.last_name.includes(search)
  }
}
