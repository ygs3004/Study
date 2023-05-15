package function.switchCase.notGood;

import function.switchCase.InvalidEmployeeType;

import static function.switchCase.notGood.Employee.type.*;

public class Money {
    public Money calculatePay(Employee e) throws InvalidEmployeeType {
        switch (e.type){
            case COMMISSIONED :
                return calculateCommissionedPay(e);
            case HOURLY :
                return calculateHourlyPay(e);
            case SALARIED :
                return calculateSalariedPay(e);
            default:
                throw new InvalidEmployeeType(e.type);
        }
    }

    private Money calculateSalariedPay(Employee e) {
        return null;
    }

    private Money calculateHourlyPay(Employee e) {
        return null;
    }

    private Money calculateCommissionedPay(Employee e) {
        return null;
    }

}
