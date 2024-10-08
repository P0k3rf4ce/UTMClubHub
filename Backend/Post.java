import java.util.ArrayList;
import java.util.Date;

public class Post {
     /*
      * This is a post class which represents an individual post object which is to be displayed on a user's feed
      *
      * Important: Every post must pass a moderation check before it can be shown to users
      *
      * Posts must also organize and maintain a list of all their comments.
      *  */
    ArrayList<String> tags;
    ArrayList<Comment> comments;
    Date eventTime;

    int likes;
    int commentCount;

    boolean postVisible;
    boolean commentsVisible;
    boolean restrictComments;
    boolean userliked; // MAKE IT A SET OF USER ID's WHO LIKED IT SO WE CAN BE SPEEDY

    String html; // Temp attribute, to figure out how to render the content

    public Post(){
        /*
        * Delete this comment once you've figured out what is being passed into the post
        *
        * -> 1) Are we passing in a string? -> vs are we passing in the tags, content, date etc.
        *
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

    public void likePost(){
        /*
        * Increment the likes, if the user has not yet done so
        */
        if (!this.userliked){
            this.likes += 1;
            this.userliked = true;
        }
    }

    public void editPost(){
        /*
        * Use the same parameters for the Post, to change properties for the post i.e. the date / time
        */
        // TODO
    }

    public void render(){
        /*
        * Render the Post, figure out how to do it
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

    public void addComment(String s){
        /*
        * Add a given comment to this list of comments under the post
        */
        this.comments.add(new Comment(s));
        this.commentCount += 1;
    }
}
