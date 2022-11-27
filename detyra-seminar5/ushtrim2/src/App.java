import java.util.Scanner;

/*
 * 2.Te shkruhet nje program qe lexon numrin e muajit dhe kthen sa dite ka ai muaj.
 */

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        Scanner in = new Scanner(System.in);

        System.out.println("Month: ");
        String month = in.next();

        switch (month.toLowerCase()) {
            case "janar":
                System.out.println("31");
                in.close();
                break;
            case "shkurt":
                System.out.println("28 ose 29");
                in.close();
                break;
            case "mars":
                System.out.println("31");
                in.close();
                break;
            case "prill":
                System.out.println("30");
                in.close();
                break;
            case "maj":
                System.out.println("31");
                in.close();
                break;
            case "qershor":
                System.out.println("30");
                in.close();
                break;
            case "korrik":
                System.out.println("31");
                in.close();
                break;
            case "gusht":
                System.out.println("31");
                in.close();
                break;
            case "shtator":
                System.out.println("30");
                in.close();
                break;
            case "tetor":
                System.out.println("31");
                in.close();
                break;
            case "nentor":
                System.out.println("30");
                in.close();
                break;
            case "dhjetor":
                System.out.println("31");
                in.close();
                break;
            default:
                System.err.println("Muaji nuk eksiston");
                break;
        }
    }
}
