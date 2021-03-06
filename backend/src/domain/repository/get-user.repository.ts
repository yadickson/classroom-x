import { UserModel } from '../model/user.model';

export abstract class GetUserRepository {
    abstract getUserById(id: string): Promise<UserModel>
    abstract getUserByUsername(username: string): Promise<UserModel>
}