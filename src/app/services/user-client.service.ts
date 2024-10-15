import {Injectable} from '@angular/core';
import axios from "axios";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class UserCLientService {

  async getUsers() {
    const baseUrl = "http://localhost:8443";
    const path = "/v1/orgs/orgId/users"

    const response = await axios.get<{ users: User[] }>(baseUrl + path, {withCredentials: true});
    return response.data.users;
  }
}
