import { Cell } from "../../Cell";
import { Colors } from "../../Colors";
import { Figure, FigureNames } from "../Figure";
import whitelogo from "../../../assets/white-bishop.png";
import blacklogo from "../../../assets/black-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.BISHOP;
  }
}
