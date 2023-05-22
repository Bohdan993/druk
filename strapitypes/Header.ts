import { IMedia } from "./builtins/Media";
import { ICommonSocials } from "./common/Socials";
import { ICommonContactItem } from "./common/ContactItem";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IHeader<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      logo?: { data: IMedia | null };
      social?: ICommonSocials<ExtractNested<Populate, "social">>[];
      menu?: ICommonContactItem<ExtractNested<Populate, "menu">>[];
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
