// API/src/Modules/Docker/Utils/pullImage.ts
import { docker } from '../DockerResolver';
import pEvent from 'p-event';

export const pullImage = (image: string) =>
  new Promise(async (resolve, reject) =>
    docker.pull(image, (err, stream) =>
      docker.modem.followProgress(stream, resolve, () => {})
    )
  );
