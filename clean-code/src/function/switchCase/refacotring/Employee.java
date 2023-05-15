package function.switchCase.refacotring;

import function.switchCase.notGood.Money;

public abstract class Employee {
    public abstract boolean isPayDay();
    public abstract Money calculatePay();
    public abstract void deliverPay(Money pay);
}
