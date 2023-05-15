package function.switchCase.refacotring;

public class EmployeeFactoryImpl implements EmployeeFactory{
    @Override
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
        switch (e.type){
            case COMMISSIONED :
                return new CommisionedEmployee(r);
            case HOURLY:
                return new HourlyEmployeer(r);
            case SALARIED :
                return new SalariedEmployee(r);
            default:
                throw new InvalidEmployeeType(r.type);
        }
    }
}
