import { ICommonContactItem } from "./ContactItem";
import { ICommonSocials } from "./Socials";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type ICommonContact<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "common.contact";
      title: string | null;
      contactitem?: ICommonContactItem<
        ExtractNested<Populate, "contactitem">
      >[];
      contactsocial?: ICommonSocials<
        ExtractNested<Populate, "contactsocial">
      >[];
    },
    ExtractFlat<Populate>
  >;
