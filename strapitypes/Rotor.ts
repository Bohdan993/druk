import { IRotorRotorPieceType_2 } from "./rotor/RotorPieceType_2";
import { IRotorRotorPiece } from "./rotor/RotorPiece";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IRotor<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string | null;
      type: "singleselect" | "multiselect" | "singleselect2" | null;
      rotorpiece?: Array<
        | IRotorRotorPieceType_2
        | IRotorRotorPiece<ExtractNested<Populate, "rotorpiece">>
      >;
      order: number | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
