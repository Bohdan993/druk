import { IMedia } from "./builtins/Media";
import { IAboutImagetext } from "./about/Imagetext";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IAbout<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string | null;
      title2: string | null;
      text: string | null;
      image?: { data: IMedia | null };
      slogan: string | null;
      imagetextarea?: IAboutImagetext<
        ExtractNested<Populate, "imagetextarea">
      >[];
      imagetextarea2title: string | null;
      imagetextarea2?: IAboutImagetext<
        ExtractNested<Populate, "imagetextarea2">
      >[];
      text2: string | null;
      imagetextareatitle: string | null;
      sectionid: string | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
