import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.sql.Connection;
import java.sql.Connection;

/**
 * A class used to represent an authenticator.
 * Hashes the passwords, so that they can't be cracked or leaked when loaded / viewed in the database
 * Hashes the password before trying to compare it to that of the database
 * Updates status of the particular user.
 * Once authenticated, the user is now logged in across all relevant client sessions (i.e. their tab)
 */
public class Authenticator {
    private Connection database;

    /**
     * Create a new authenticator object
     * There should only ever be one authenticator at any given time
     * Store the database connection for further use (i.e. to check fields of).
     * */
    public Authenticator(Connection database){
        this.database = database;
    }

    /**
     * Takes in a byte array returned by a given hashing algorithm.
     * Returns the hex string representation of the byte array.
     */
    private static String bytesToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    /**
     * Generate a random (likely unique) salt to be applied in the hashing of the user's password.
     * */
    private static String generateSalt() {
        SecureRandom rand = new SecureRandom();
        byte[] salt = new byte[16];
        rand.nextBytes(salt);

        return new String(salt, StandardCharsets.UTF_8);
    }

    /**
     * Take in a username and password.
     * Query the database to see if the given username and password matches any of the users.
     * Return a status of if the authentication was successful.
     */
    public boolean authenticate(String username, String password){
        return false;
    }

}

