import { ICommonContact } from "./common/Contact";
import { IMedia } from "./builtins/Media";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IFooter<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      copyright: string | null;
      contact?: ICommonContact<ExtractNested<Populate, "contact">> | null;
      social?: ICommonContact<ExtractNested<Populate, "social">> | null;
      privacy?: ICommonContact<ExtractNested<Populate, "privacy">> | null;
      logo?: { data: IMedia | null };
      sectionid: string | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
