import {computed, inject, Injectable, signal} from '@angular/core';
import {UserCLientService} from "./user-client.service";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {

  userClientService = inject(UserCLientService)

  #userSignal = signal<User[]>([])

  users = computed(() => this.#userSignal())


  public async fetchUsers() {
    const users = await this.userClientService.getUsers()
    this.#userSignal.set(users)
  }

}
