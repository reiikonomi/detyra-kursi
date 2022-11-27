import java.util.Scanner;

/*
 * 
 * 1.Te shkruhet programi per konvertimin e valutes Euro ne valutat Dollar amerikan, Jen Japonez,
 * Lek shqiptar, Lira turke dhe Pound anglez nese dihet faktori i konvertimit.
 * 
*/

public class App {
    public static void main(String[] args) throws Exception {

        Scanner in = new Scanner(System.in);

        double lek_koef = 1.17;
        double dollar_koef = 1.04;
        double yen_koef = 144.54;
        double lira_koef = 19.34;
        double pound_koef = 0.86;

        System.out.println("Amount: ");
        double amount = in.nextDouble();

        System.out.println("Currency to be convert to: ");
        String currency = in.next();

        switch (currency.toLowerCase()) {
            case "lek":
                System.out.println(amount * lek_koef);
                in.close();
                break;
            case "dollar":
                System.out.println(amount * dollar_koef);
                in.close();
                break;
            case "yen":
                System.out.println(amount * yen_koef);
                in.close();
                break;
            case "lira":
                System.out.println(amount * lira_koef);
                in.close();
                break;
            case "pound":
                System.out.println(amount * pound_koef);
                in.close();
                break;

            default:
                System.err.println("Nuk ka te dhena per kete monedhe.");
                in.close();
                break;
        }

    }
}
