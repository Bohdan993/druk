import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type ICommonSocials<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "common.socials";
      link: string | null;
      image?: { data: IMedia | null };
      name: string | null;
    },
    ExtractFlat<Populate>
  >;
