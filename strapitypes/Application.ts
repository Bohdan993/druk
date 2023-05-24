import { IMedia } from "./builtins/Media";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IApplication<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      name: string | null;
      phonenum: string | null;
      phoneoperator: string | null;
      bookname: string | null;
      bookauthor: string | null;
      file?: { data: IMedia | null };
      url: string | null;
      bounding: string | null;
      color: string | null;
      advancedservices: string | null;
      comment: string | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
