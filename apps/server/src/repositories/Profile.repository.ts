import { Repository } from "./Repository";

class ProfileRepository extends Repository<ICity, ICityDoc, Types.ObjectId> {
  public getAllProfileById = (id) => {}

}

const profileRepository = new ProfileRepository();
export { profileRepository };

