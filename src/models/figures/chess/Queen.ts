import { Figure, FigureNames } from "../Figure";
import { Colors } from "../../Colors";
import { Cell } from "../../Cell";
import whitelogo from "../../../assets/white-queen.png";
import blacklogo from "../../../assets/black-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyHorizontal(target) ||
      this.cell.isEmptyDiagonal(target)
    )
      return true;
    return false;
  }
}
