import { ICluesClueitem } from "./Clueitem";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type ICluesCluelist<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "clues.cluelist";
      title: string | null;
      clueitem?: ICluesClueitem[];
    },
    ExtractFlat<Populate>
  >;
