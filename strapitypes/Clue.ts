import { IMedia } from "./builtins/Media";
import { ICluesCluelist } from "./clues/Cluelist";
import { ICluesClueslists2 } from "./clues/Clueslists2";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IClue<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      name: string | null;
      clue: string | null;
      image?: { data: IMedia | null };
      order: string | null;
      showontablets: boolean | null;
      customstyle: any;
      clueslists?: Array<
        | ICluesCluelist<ExtractNested<Populate, "clueslists">>
        | ICluesClueslists2<ExtractNested<Populate, "clueslists">>
      >;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
