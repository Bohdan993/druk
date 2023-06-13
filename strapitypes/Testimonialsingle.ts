import { ICommonSocials } from "./common/Socials";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface ITestimonialsingle<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string | null;
      sectionid: string | null;
      button?: ICommonSocials<ExtractNested<Populate, "button">> | null;
      button2?: ICommonSocials<ExtractNested<Populate, "button2">> | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
