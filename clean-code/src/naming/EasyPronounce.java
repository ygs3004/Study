package naming;

import java.util.Date;

public class EasyPronounce {
    // 발음하기 쉽게 지을 것
    // Bad
    class DtaRcrd102{
        /*generate date, year, month, day, hour, minute, second*/
        private Date genymdhrms;
        private Date modymdhms;
        private final String pszqing = "102";
    }

    // Good
    class Customer{
        private Date generationTimestamp;
        private Date modificationTimestamp;
        private final String recordId = "102";
    }

}
