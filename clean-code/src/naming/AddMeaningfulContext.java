package naming;

public class AddMeaningfulContext {
    // 의미 있는 맥락을 추가할 것
    // Bad
    private void printGuessStatistics(char candidate, int count) {
        String number;
        String verb;
        String pluralModifier;
        if (count == 0) {
            number = "no";
            verb = "are";
            pluralModifier = "s";
        } else if (count == 1) {
            number = "1";
            verb = "is";
            pluralModifier = "";
        } else {
            number = Integer.toString(count);
            verb = "are";
            pluralModifier = "s";
        }

        String guessMessage = String.format("There %s %s %s%s", verb, number, candidate, pluralModifier);
        System.out.println(guessMessage);
    }

    // Good
    public class GuessStaticsMessage {
        private String number;
        private String verb;
        private String pluralModifier;

        public String make(char candidate, int count) {
            createPluralDependentMessageParts(count);
            return String.format("There %s %s %s%s", verb, number, candidate, pluralModifier);
        }

        private void createPluralDependentMessageParts(int count) {
            if (count == 0) {
                thereAreNoLetters();
            } else if (count == 1) {
                thereIsOneLetter();
            } else {
                thereAreManyLetters(count);
            }
        }

        private void thereAreManyLetters(int count){
            number = Integer.toString(count);
            verb = "are";
            pluralModifier = "s";
        }

        private void thereIsOneLetter() {
            number = "1";
            verb = "is";
            pluralModifier = "";
        }

        private void thereAreNoLetters() {
            number = "no";
            verb = "are";
            pluralModifier = "s";
        }

    }

    public static void main(String[] args) {
        new AddMeaningfulContext().printGuessStatistics('C', 1);
        System.out.println(new AddMeaningfulContext().new GuessStaticsMessage().make('A',2));
    }

}
