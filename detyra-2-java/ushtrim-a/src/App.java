import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int start, finish;

        int result = 0;

        Scanner input = new Scanner(System.in);

        System.out.print("Numri fillestar: ");
        start = input.nextInt();

        System.out.print("Numri i fundit: ");
        finish = input.nextInt();

        input.close();

        while (start <= finish) {
            if (start % 2 == 0) {
                result += start;
            }
            start++;
        }

        System.out.println("Shuma e numrave mes " + start + "dhe" + finish + "eshte: " + result);

    }
}
