import { ComponentType } from "react";

import DglogDetails from "./dglog";
import CuteChattingDetails from "./cutechatting";
import PokemonDetails from "./pokemon-book";
import ImageConversionDetails from "./image-conversion-app";

export const projectComponentMap: Record<string, ComponentType> = {
  dglog: DglogDetails,
  cutechatting: CuteChattingDetails,
  pokemon: PokemonDetails,
  "image-conversion-app": ImageConversionDetails,
};
