import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * The Post class models a social media post to be displayed on a user's feed.
 * Each post can contain comments and is subject to moderation before being shown to other users.
 * Posts also track metadata such as likes, timestamps, and visibility settings.
 */
public class Post {

    /** Unique identifier for the post. */
    protected int postId;

    /** Identifier for the user who created the post. */
    protected int ownerId;

    /** List of tags associated with the post for categorization or filtering. */
    protected ArrayList<String> tags;

    /** List of comments attached to the post. */
    protected ArrayList<Comment> comments;

    /** Timestamps for the event time, time posted, and last modification time. */
    protected Date eventTime, timePosted, timeModified;

    /** Tracks the number of likes and comments on the post. */
    protected int likes, commentCount;

    /** Controls the visibility of the post and its comments, and whether comments are restricted. */
    protected boolean postVisible, commentsVisible, restrictComments;

    /** HTML code or content to render the post's body in the user interface. */
    protected String postBodyCode;

    /**
     * Constructs a new Post object with default properties. Initializes lists for tags and comments,
     * and sets the post's initial state as invisible, with zero likes and comments.
     *
     * @param postId Unique identifier for the post.
     */
    public Post(int postId) {
        this.tags = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.likes = 0;                // Default to zero likes
        this.eventTime = null;         // Event time not set on creation
        this.commentCount = 0;         // Default to zero comments
        this.commentsVisible = false;  // Comments are hidden by default
        this.restrictComments = false; // No comment restriction by default
        this.postVisible = false;      // Post is invisible until explicitly made visible
    }

    /**
     * Registers a 'like' from the specified user by incrementing the like counter,
     * provided that the user hasn't already liked the post. This method interacts with the database
     * to track user likes.
     *
     * @param userId The ID of the user liking the post.
     */
    public void likePost(int userId) {
        // TODO: Query the database to check if the user has already liked the post.
        // If not, increment the like counter and update the database.
    }

    /**
     * Edits the post properties, such as modifying the post body or changing the associated timestamps.
     * This method allows the post to be updated after creation.
     */
    public void editPost() {
        // TODO: Implement functionality to update the post properties (e.g., post body, timestamps).
    }

    /**
     * Sets the restriction status for comments on this post. When set to true, comments are disabled
     * for the post. When false, comments are allowed.
     *
     * @param restrict Whether to restrict comments (true) or allow them (false).
     */
    public void setRestrictComments(boolean restrict) {
        this.restrictComments = restrict;
    }

    /**
     * Returns a list of the most recent comments on this post, up to the specified number of comments.
     * This method should retrieve comments from the database, sorted by newest first.
     *
     * @param numComments The maximum number of comments to retrieve.
     * @return A list of comments sorted by most recent.
     */
    public List<Comment> getComments(int numComments) {
        // TODO: Query the database to retrieve the specified number of comments, sorted by newest first.
        return null;
    }

    // Additional methods can be added as needed for other functionality like deleting posts, adding tags, etc.

    /**
     * (Commented out) Adds a new comment to the post and increments the comment count.
     * This is a placeholder for future development when comment creation is linked with the UI or database.
     */
    /*
    public void addComment(String commentContent) {
        this.comments.add(new Comment(commentContent)); // Add the new comment to the list
        this.commentCount += 1; // Increment the comment count
    }
    */
}
