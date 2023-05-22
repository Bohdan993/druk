import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type IAboutImagetext<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "about.imagetext";
      text: string | null;
      image?: { data: IMedia | null };
    },
    ExtractFlat<Populate>
  >;
