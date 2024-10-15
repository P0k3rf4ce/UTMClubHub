/**
 * The Comment class represents a user-generated comment attached to a post within the feed.
 * Each comment is not standalone but is always linked to a post. Comments are subject to
 * moderation, and their visibility can be controlled by both the original poster and
 * platform moderators.
 */
public class Comment {

    /** The text content of the comment to be displayed on the feed. */
    protected String display;

    /** A log that tracks all previous versions of the comment for moderation and auditing purposes. */
    protected String history;

    /** Counter to track the number of edits made to the comment. */
    protected int editCount;

    /** Indicates whether the comment has passed moderation checks. */
    protected boolean moderated;

    /** Indicates whether the comment is visible to users after moderation or other actions. */
    protected boolean isVisible;

    /**
     * Constructs a new Comment with the given content. Upon creation, the comment is
     * neither moderated nor visible until it undergoes the moderation process.
     *
     * @param comment The initial content of the comment.
     */
    public Comment(String comment) {
        this.history = "";       // Initialize history as an empty string.
        this.editCount = 0;      // Initialize edit count to zero.
        this.display = comment;  // Set the initial comment text.
        this.moderated = false;  // Comments are unmoderated by default upon creation.
        this.isVisible = false;  // Comments are hidden by default until approved by moderation.
    }

    /**
     * Edits the current comment content. Each edit increments the edit count,
     * appends the previous version of the comment to the history log, and resets
     * the moderation and visibility states.
     *
     * @param newComment The updated comment content.
     */
    public void editComment(String newComment) {
        this.editCount += 1; // Increment edit count for each edit.
        this.history = " EDIT " + (this.editCount - 1) + ": " + this.display; // Append old comment to history.
        this.display = newComment; // Update the comment content.
        this.moderated = false;    // Reset moderation state after an edit.
        this.isVisible = false;    // Reset visibility until re-moderation.
    }

    /**
     * Marks the comment as having passed moderation. This is a placeholder method for
     * future development where a moderation system will determine if the comment is
     * suitable for posting based on content policies (e.g., banned words, community guidelines).
     */
    public void Moderate() {
        this.moderated = true; // Temporarily set to true, will include conditional checks in future.
    }

    /**
     * Temporarily makes the comment visible by setting the visibility flag to true. In future
     * iterations, this method could return a formatted string or HTML object representing the
     * comment for the front-end to render in the UI.
     */
    public void render() {
        this.isVisible = true; // Set visibility to true.
    }

    // Getters and setters can be added as needed for accessing or modifying the comment’s fields.
    // PLEASE ADD SOME BEFORE MAKING THE ATTRIBUTES PRIVATE
}



