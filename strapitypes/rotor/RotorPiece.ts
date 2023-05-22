import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export type IRotorRotorPiece<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "rotor.rotor-piece";
      image?: { data: IMedia | null };
      active: boolean | null;
      key: string | null;
      text: string | null;
    },
    ExtractFlat<Populate>
  >;
