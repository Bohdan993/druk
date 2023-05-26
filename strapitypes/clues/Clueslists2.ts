import { ICluesClueitem } from "./Clueitem";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type ICluesClueslists2<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "clues.clueslists2";
      clueslists2?: ICluesClueitem[];
    },
    ExtractFlat<Populate>
  >;
