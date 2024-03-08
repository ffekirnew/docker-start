import { Platform } from "../services/platform-service";
import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data } = usePlatforms();
  return data?.results?.find((platform: Platform) => platform.id === platformId)?.name || null;
} 

export default usePlatform;
