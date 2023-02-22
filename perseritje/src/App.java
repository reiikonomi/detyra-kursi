import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class App {

    public void Log() {
        System.out.println("Log");
    }

    public int Calc(int a, int b) {
        return a + b;
    }

    static void nPrint(String message, int n) {
        n = 1;
        // while (n > 0) {
        // System.out.print(message);
        // n--;
        // }
    }

    public static char printGrade(double score) {
        if (score >= 90.0) {
            return 'A';
        } else if (score >= 80.0) {
            return 'B';
        } else if (score >= 70.0) {
            return 'C';
        } else if (score >= 60.0) {
            return 'D';

        } else {
            return 'F';
        }
    }

    public boolean searchMatrix(int[][] matrix, int target) {
        boolean isInMatrix = false;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    isInMatrix = true;
                }
            }
        }
        return isInMatrix;
    }

    public static void main(String[] args) throws Exception {

        var app = new App();

        int a = app.Calc(2, 4);

        System.out.println(a);

        int k = 2;

        nPrint("A message", k);

        System.out.println(k);

        System.out.println("Hello, World!");

        int test = (int) (Math.random() * (65535 + 1));

        System.out.println(test);

        Math.pow(2, 4);
        boolean[][] x = new boolean[3][];
        x[0] = new boolean[1];
        x[1] = new boolean[2];
        x[2] = new boolean[3];

        System.out.println("x[2][2] is " + x[2][2]);

        int[][] matrix = { { 1, 3, 5, 7 }, { 10, 11, 16, 20 }, { 23, 30, 34, 60 } };

        var isInMatrix = app.searchMatrix(matrix, 16);

        if (isInMatrix == true) {
            System.out.println("Is in matrix");
        } else if (isInMatrix == false) {
            System.out.println("Is not in matrix");
        }

        int[][] values = { { 3, 4, 5, 1 }, { 33, 6, 1, 2 } };

        int v = values[0][0];
        for (int[] list : values)
            for (int element : list)
                if (v > element)
                    v = element;

        System.out.print(v);

        int[] list = new int[3];
        System.out.println("list[0] is " + list[0]);

        double d[] = new double[30];

        // char[] charArray = {'a', 'b'};
        char[] charArray = new char[2];
        // charArray = {'a', 'b'};

        double[] u = new double[] { 1, 2, 3 };
        System.out.println("Value is " + u[1]);
        System.out.println(u.length);

        // int[] y = new int[5];
        // int i;
        // for (i = 0; i < y.length; i++)
        // y[i] = i;
        // System.out.println(y[i]);

        // create a 2D array of 5 rows and 5 columns called z
        int[][] z = new int[5][5];
        // fill the array with values
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                z[j][l] = j + l;
            }
        }
        // print the array
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                System.out.print(z[j][l] + " ");
            }
            System.out.println();
        }
        // find the sum of the values in the array
        int sum = 0;
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                sum += z[j][l];
            }
        }
        // print the sum
        System.out.println("Sum is " + sum);
        // find the sum of the diagonal values
        int sumDiagonal = 0;
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                if (j == l) {
                    sumDiagonal += z[j][l];
                }
            }
        }
        // print the sum of the diagonal
        System.out.println("Sum of diagonal is " + sumDiagonal);
        // find the sum of the values in the upper triangle
        int sumUpperTriangle = 0;
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                if (j <= l) {
                    sumUpperTriangle += z[j][l];
                }
            }
        }
        // print the sum of the upper triangle
        System.out.println("Sum of upper triangle is " + sumUpperTriangle);
        // find the sum of the values in the lower triangle
        int sumLowerTriangle = 0;
        for (int j = 0; j < z.length; j++) {
            for (int l = 0; l < z[j].length; l++) {
                if (j >= l) {
                    sumLowerTriangle += z[j][l];
                }
            }
        }
        // print the sum of the lower triangle
        System.out.println("Sum of lower triangle is " + sumLowerTriangle);

        //
        int random;
        for (int j = 0; j < 10; j++) {
            random = (int) (Math.random() * 6) + 1;
            if (random == 6) {
                System.out.println("Death");
            } else if (random == 1) {
                System.out.println("Life");
            } else {
                System.out.println("Nothing");
            }
        }

        String word1 = "testing";
        String[] wordArray = new String[word1.length()];
        String[] displayArray = new String[word1.length()];
        for (int j = 0; j < word1.length(); j++) {
            wordArray[j] = Character.toString(word1.charAt(j));
            displayArray[j] = "_";
        }
        int lives = 5;
        boolean isComplete = false;
        String guess;
        Scanner input = new Scanner(System.in);
        while (lives > 0 && isComplete == false) {
            System.out.println("You have " + lives + " lives left.");
            System.out.println("Guess a letter: ");
            guess = input.nextLine();
            if (Arrays.asList(wordArray).contains(guess)) {
                for (int j = 0; j < word1.length(); j++) {
                    if (wordArray[j].equals(guess)) {
                        displayArray[j] = guess;
                    }
                }
                System.out.println(Arrays.toString(displayArray));
                if (Arrays.asList(displayArray).contains("_") == false) {
                    isComplete = true;
                }
            } else {
                System.out.println("Incorrect");
                lives--;
            }
        }
        if (isComplete == true) {
            System.out.println("You win!");
        } else {
            System.out.println("You lose!");
        }

        // create a 2D array of 5 rows and 5 columns called p
        int[][] p = new int[5][5];
        // fill the array with values and find the sum of them and diagonal sum and
        // upper triangle sum and lower triangle sum in a single loop
        int sumP = 0;
        int sumDiagonalP = 0;
        int sumUpperTriangleP = 0;
        int sumLowerTriangleP = 0;
        for (int j = 0; j < p.length; j++) {
            for (int l = 0; l < p[j].length; l++) {
                p[j][l] = j + l;
                sumP += p[j][l];
                if (j == l) {
                    sumDiagonalP += p[j][l];
                }
                if (j <= l) {
                    sumUpperTriangleP += p[j][l];
                }
                if (j >= l) {
                    sumLowerTriangleP += p[j][l];
                }
            }
        }

        double[] m = new double[10];

        double t[] = new double[10];

        // fill array m with random numbers between 0 and 1
        for (int j = 0; j < m.length; j++) {
            m[j] = Math.random();
        }
        // print those number
        for (int j = 0; j < m.length; j++) {
            System.out.println(m[j]);
        }

        // print the sum
        System.out.println("Sum is " + sumP);
        // print the sum of the diagonal
        System.out.println("Sum of diagonal is " + sumDiagonalP);
        // print the sum of the upper triangle
        System.out.println("Sum of upper triangle is " + sumUpperTriangleP);
        // print the sum of the lower triangle
        System.out.println("Sum of lower triangle is " + sumLowerTriangleP);

        // create a 2D array of 5 rows and 5 columns called w
        int[][] w = new int[5][5];
        // fill the array with odd numbers starting with 1
        int odd = 1;
        for (int j = 0; j < w.length; j++) {
            for (int l = 0; l < w[j].length; l++) {
                w[j][l] = odd;
                odd += 2;
            }
        }
        // find the sum of the values in the array
        int sumW = 0;
        for (int j = 0; j < w.length; j++) {
            for (int l = 0; l < w[j].length; l++) {
                sumW += w[j][l];
            }
        }
        // print the sum
        System.out.println("Sum is " + sumW);
        // find the sum of the diagonal values
        int sumDiagonalW = 0;
        for (int j = 0; j < w.length; j++) {
            for (int l = 0; l < w[j].length; l++) {
                if (j == l) {
                    sumDiagonalW += w[j][l];
                }
            }
        }
        // print the sum of the diagonal
        System.out.println("Sum of diagonal is " + sumDiagonalW);
        // find the sum of the values in the upper triangle
        int sumUpperTriangleW = 0;
        for (int j = 0; j < w.length; j++) {
            for (int l = 0; l < w[j].length; l++) {
                if (j <= l) {
                    sumUpperTriangleW += w[j][l];
                }
            }
        }
        // print the sum of the upper triangle
        System.out.println("Sum of upper triangle is " + sumUpperTriangleW);
        // find the sum of the values in the lower triangle
        int sumLowerTriangleW = 0;
        for (int j = 0; j < w.length; j++) {
            for (int l = 0; l < w[j].length; l++) {
                if (j >= l) {
                    sumLowerTriangleW += w[j][l];
                }
            }
        }
        // print the sum of the lower triangle
        System.out.println("Sum of lower triangle is " + sumLowerTriangleW);
        // create a 2D array being that when it's printed it looks like among us
        int[][] amongUs = new int[5][5];
        for (int j = 0; j < amongUs.length; j++) {
            for (int l = 0; l < amongUs[j].length; l++) {
                if (j == 0 || j == 4) {
                    amongUs[j][l] = 1;
                } else if (l == 0 || l == 4) {
                    amongUs[j][l] = 1;
                } else {
                    amongUs[j][l] = 0;
                }
            }
        }
        for (int j = 0; j < amongUs.length; j++) {
            for (int l = 0; l < amongUs[j].length; l++) {
                System.out.print(amongUs[j][l]);
            }
            System.out.println();
        }

        // create a 2D array being that when it's printed it looks like a chess board
        int[][] chessBoard = new int[8][8];
        for (int j = 0; j < chessBoard.length; j++) {
            for (int l = 0; l < chessBoard[j].length; l++) {
                if (j % 2 == 0) {
                    if (l % 2 == 0) {
                        chessBoard[j][l] = 1;
                    } else {
                        chessBoard[j][l] = 0;
                    }
                } else {
                    if (l % 2 == 0) {
                        chessBoard[j][l] = 0;
                    } else {
                        chessBoard[j][l] = 1;
                    }
                }
            }
        }
        for (int j = 0; j < chessBoard.length; j++) {
            for (int l = 0; l < chessBoard[j].length; l++) {
                System.out.print(chessBoard[j][l]);
            }
            System.out.println();
        }

        // create a console tic tac toe game
        Scanner input1 = new Scanner(System.in);
        int[][] ticTacToe = new int[3][3];
        int player = 1;
        int row = 0;
        int column = 0;
        int turn = 0;
        boolean win = false;
        while (win == false) {
            System.out.println("Player " + player + " enter a row (0, 1, or 2)");
            row = input1.nextInt();
            System.out.println("Player " + player + " enter a column (0, 1, or 2)");
            column = input1.nextInt();
            if (ticTacToe[row][column] == 0) {
                ticTacToe[row][column] = player;
                turn++;
            } else {
                System.out.println("That spot is already taken");
            }
            for (int j = 0; j < ticTacToe.length; j++) {
                for (int l = 0; l < ticTacToe[j].length; l++) {
                    System.out.print(ticTacToe[j][l]);
                }
                System.out.println();
            }
            if ((ticTacToe[0][0] == player && ticTacToe[0][1] == player && ticTacToe[0][2] == player)
                    || (ticTacToe[1][0] == player && ticTacToe[1][1] == player && ticTacToe[1][2] == player)
                    || (ticTacToe[2][0] == player && ticTacToe[2][1] == player && ticTacToe[2][2] == player)
                    || (ticTacToe[0][0] == player && ticTacToe[1][0] == player && ticTacToe[2][0] == player)
                    || (ticTacToe[0][1] == player && ticTacToe[1][1] == player && ticTacToe[2][1] == player)
                    || (ticTacToe[0][2] == player && ticTacToe[1][2] == player && ticTacToe[2][2] == player)
                    || (ticTacToe[0][0] == player && ticTacToe[1][1] == player && ticTacToe[2][2] == player)
                    || (ticTacToe[0][2] == player && ticTacToe[1][1] == player && ticTacToe[2][0] == player)) {
                System.out.println("Player " + player + " wins!");
                win = true;
            } else if (turn == 9) {
                System.out.println("Its a tie");
            }
            if (player == 1) {
                player = 2;
            } else {
                player = 1;
            }
        }

    }
}
