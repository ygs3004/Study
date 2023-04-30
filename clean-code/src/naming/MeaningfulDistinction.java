package naming;

public class MeaningfulDistinction {

    // Bad
    public static void copyChars(char a1[], char a2[]){
        for(int i=0; i<a1.length; i++){
            a2[i] = a1[i];
        }
    }

    // 읽는 사람이 차이를 알도록 지을것
}
