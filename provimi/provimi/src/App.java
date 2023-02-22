public class App {

    public static void method1(int n, int m) {
        n += m;
        method2(n);

    }

    public static int method2(int n) {
        if (n > 0) {
            return 1;
        } else if (n == 0) {
            return 0;
        } else if (n < 0) {
            return -1;
        }
        return n;

    }

    public static void main(String[] args) throws Exception {
        method1(3, 4);
    }
}
