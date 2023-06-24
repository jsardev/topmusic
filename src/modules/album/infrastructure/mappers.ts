import { Album } from "../model";
import { AlbumDTO } from "./types";

export const mapAlbumDTOToAlbum = (albumDTO: AlbumDTO): Album => {
  return {
    id: albumDTO.id.attributes["im:id"],
    artist: albumDTO["im:artist"].label,
  };
};
