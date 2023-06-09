import { IMedia } from "./builtins/Media";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IGallery<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      image?: { data: IMedia | null };
      name: string | null;
      size: string | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
