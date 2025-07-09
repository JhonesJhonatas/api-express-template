import { IUserRepository } from "@/modules/user/infra/repositories/i-user-repository";

class UserRepository implements IUserRepository {
  async create(): Promise<void> {
    return;
  }
}

export { UserRepository };