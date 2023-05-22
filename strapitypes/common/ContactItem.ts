import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type ICommonContactItem<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "common.contact-item";
      name: string | null;
      link: string | null;
      image?: { data: IMedia | null };
    },
    ExtractFlat<Populate>
  >;
