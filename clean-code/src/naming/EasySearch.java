package naming;

public class EasySearch {
    // 검색하기 쉽게 지을것
    // Bad
    int s;
    int[] t;
    void bad(){
        for(int j=0; j<34; j++){
            s += (t[j]*4)/5;
        }
    }

    // Good
    void good(){
        int realDaysPerIdealDay = 4;
        final int WORK_DAYS_PER_WEEK = 5;
        int NUMBER_OF_TASKS = 10;
        int[] taskEstimate = {1};
        int sum = 0;
        for(int j=0; j<NUMBER_OF_TASKS; j++){
            int realTastDays = taskEstimate[j] * realDaysPerIdealDay;
            int realTaskWeeks = (realTastDays / WORK_DAYS_PER_WEEK);
            sum += realTaskWeeks;
        }
    }

}
