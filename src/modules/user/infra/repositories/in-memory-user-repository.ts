import { IUserRepository } from "@/modules/user/infra/repositories/i-user-repository";

class InMemoryUserRepository implements IUserRepository {
  async create(): Promise<void> {
    return;
  }
}

export { InMemoryUserRepository };