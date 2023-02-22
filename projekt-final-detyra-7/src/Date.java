import java.util.Scanner;

public class Date {

    private int day;

    private int month;

    private int year;

    public Date(int d, int m, int y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }

    public void SetDate(int d, int m, String sm, int y) {
        this.setDay(d);
        this.setMonth(m);
        this.setMonthFromString(sm);
        this.setYear(y);
    }

    public String getMonth() {
        if (month <= 9) {
            String newMonth = "0" + String.valueOf(month);
            return newMonth;
        } else {
            String newMonth = String.valueOf(month);
            return newMonth;
        }

    }

    public String getYear() {
        String newYear = String.valueOf(year);
        return newYear;
    }

    public String getDay() {
        if (day <= 9) {
            String newday = "0" + String.valueOf(day);
            return newday;
        } else {
            String newday = String.valueOf(day);
            return newday;
        }
    }

    /*
     * 1. Ne dokumentim ishte shkruar
     * "Për shembull për datën 1 Janar 2023, metoda duhet të kthejë stringun 01/01/2023."
     * prandaj kam futur mundesine te perkthehet nga string ne int sic duhet.
     * Kalo ne piken 2 per te pare shembull
     */
    public void setMonthFromString(String m) {
        switch (m) {
            case "Janar":
                this.month = 1;
                break;
            case "Shkurt":
                this.month = 2;
                break;
            case "Mars":
                this.month = 3;
                break;
            case "Prill":
                this.month = 4;
                break;
            case "Maj":
                this.month = 5;
                break;
            case "Qershor":
                this.month = 6;
                break;
            case "Korrik":
                this.month = 7;
                break;
            case "Gusht":
                this.month = 8;
                break;
            case "Shtator":
                this.month = 9;
                break;
            case "Tetor":
                this.month = 10;
                break;
            case "Nentor":
                this.month = 11;
                break;
            case "Dhjetor":
                this.month = 12;
                break;

            default:
                break;
        }
    }

    public void setDay(int d) {
        if (d < 1 || d > 31) {
            System.err.println("Dita duhet te jete nga 1 deri ne 31");
        } else {
            this.day = d;
        }
    }

    public void setMonth(int m) {
        if (m < 1 || m > 12) {
            System.err.println("Muaji duhet te jete nga 1 deri ne 12");
        } else {
            this.month = m;
        }
    }

    public void setYear(int y) {
        if (y < 1900 || y > 9999) {
            System.err.println("Viti duhet te jete nga 1900 deri ne 9999");
        } else {
            this.year = y;
        }
    }

    public String toString() {
        return this.getDay() + "/" + this.getMonth() + "/" + this.getYear();
    }

    public static void main(String[] args) throws Exception {

        /*
         * Ka disa menyra se si mund te marrim te dhenat per ti bere display.
         * 
         * Respektivisht pika 3 dhe 4
         */

        /*
         * Pika 3
         */
        Date a = new Date(1, 2, 3);

        /*
         * Pika 2. Ketu eshte futur si parameter muaji
         */
        a.SetDate(4, 0, "Janar", 2022);

        System.out.println(a.toString());

        /*
         * 2. Ketu eshte lene bosh
         */
        a.SetDate(4, 10, "", 2023);

        System.out.println(a.toString());

        /*
         * Pika 4
         */

        int day;
        int month;
        int year;

        Scanner input = new Scanner(System.in);

        System.out.println("Dita:");

        day = input.nextInt();

        System.out.println("Muaji");

        month = input.nextInt();

        System.out.println("Viti");

        year = input.nextInt();

        input.close();

        a.SetDate(day, month, "", year);

        System.out.println(a.toString());

    }
}
