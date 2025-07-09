abstract class IUserRepository {
  abstract create(): Promise<void>;
}

export { IUserRepository };