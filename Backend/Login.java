
import java.util.ArrayList;

private class Login {

    private String username;
    private String password;
    private ArrayList<User> users;

    public Login(String uatt, String patt){
        this.username = uatt;
        this.password = patt;
    }

    public boolean success(ArrayList<User> us){
        for (User u: us){
            if (u.userId == username){
                // need to modify user class for password
//                if (u.password == password){
//                    return true;
//                } else {
//                    return false;
//                }
            }
        }
    }


}