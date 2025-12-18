import { AppDataSource } from "../data";
import { User } from "../models/User";

export const UserRepository = AppDataSource.getRepository(User);