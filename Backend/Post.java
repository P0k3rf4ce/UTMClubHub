import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;

public class Post {
     /*
      * This is a post class which represents an individual post object which is to be displayed on a user's feed
      *
      * Important: Every post must pass a moderation check before it can be shown to users
      *
      * Posts must also organize and maintain a list of all their comments.
      *  */
    private int postId;
    private int ownerId;
    private ArrayList<String> tags;
    //private ArrayList<Comment> comments;
    private Date eventTime, timePosted, timeModified;

    private int likes, commentCount;

    private boolean postVisible, commentsVisible, restrictComments; // MAKE IT A SET OF USER ID's WHO LIKED IT SO WE CAN BE SPEEDY

    private String postBodyCode; // HTML code to render the post body

    public Post(int postId){
        /*
        * Load in the post using database
        */
        this.tags = new ArrayList<String>();
        this.comments = new ArrayList<Comment>();
        this.likes = 0; // Or set it to a value that we pass in?
        this.eventTime = null; // Again maybe we should have this passed in as part of a formatted string,
                               // or parameterized as Date, tags, etc.
        this.commentCount = 0;
        this.commentsVisible = false;
        this.restrictComments = false;
        this.postVisible = false;
    }

    public void likePost(int userId){
        /*
        * Query database to check if user like the post
        * If not, increment like counter and write into database
        */
    }

    public void editPost(){
        /*
        * Use the same parameters for the Post, to change properties for the post i.e. the date / time
        */
        // TODO
    }

    public void setRestrictComments(boolean b){
        /*
        * Set the comments restrictions to that specified by a bool
        * I.e. show (true) or no show comments (false)
        */
        this.restrictComments = b;
    }

    /*
    public void addComment(String s){
        /*
        * Add a given comment to this list of comments under the post
        
        this.comments.add(new Comment(s));
        this.commentCount += 1;
    }*/

    /**
     * Returns a list of first numComment comments for this post, sorted newest first
     */
    public List<Comment> getComments(int numComments) {
        // TODO: Just query the database
        return null;
    }
}
