import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        int i, sum = 0, z;

        Scanner input = new Scanner(System.in);

        System.out.print("Numri i numrave qe do te mblidhen: ");

        int n = input.nextInt();

        for (i = 0; i < n; i++) {
            System.out.print("Numri: ");

            z = input.nextInt();

            if (z % 2 != 0) {
                sum = sum + z;
            }
        }

        System.out.println("Shuma e numrave tek eshte: " + sum);

    }
}
