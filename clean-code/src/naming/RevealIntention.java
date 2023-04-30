package naming;

import java.util.ArrayList;
import java.util.List;

public class RevealIntention {

    // 이름을 지을때 의도를 밝힐 것
    /* 경과시간의 변수명 */
    // Bad
    int d;
    // Good
    int elapsedTimeInDays;
    int daysSinceCreateion;
    int daysSinceModification;
    int fileAgeInDays;

    // Bad
    public List<int[]> getThem() {
        List<int[]> list1 = new ArrayList<int[]> ();
        for(int[] x : list1){
            if(x[0] == 4) list1.add(x);
        }
        return list1;
    }

    // Good
    int STATUS_VALUE = 0;
    int FLAGGED = 4;
    List<Cell> gameBoard = new ArrayList<>();
    class Cell{
        int[] cell;
        boolean isFlagged(){
            return cell[STATUS_VALUE] == FLAGGED ;
        }
    }
    public List<Cell> getFlaggedCells(){
        List<Cell> flaggedCells = new ArrayList<>();
        for(Cell cell: gameBoard){
            if (cell.isFlagged())
                flaggedCells.add(cell);
        }
        return flaggedCells;
    }
}
