package function.switchCase.notGood;

public class Employee {
    int type;


    public enum type {
        COMMISSIONED(1),
        HOURLY(2),
        SALARIED(3);

        private final int value;
        type(int value) {
            this.value =value;
        }
    }

    }
}
