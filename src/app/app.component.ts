import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TableComponent} from "./components/table/table.component";
import {SearchComponent} from "./components/search/search.component";
import {UserStoreService} from "./services/user-store.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'signal-project';
  search = signal<string | undefined>(undefined)

  userStoreService = inject(UserStoreService)

  async ngOnInit() {
    await this.userStoreService.fetchUsers();
  }

  onSearch($event: string) {
    this.search.set($event)
  }
}
