public class Comment {
    /*
    * This is a class which models a individual comment object which is to be displayed on the user's feed.
    *
    * Important: The comment is not a stand-alone object, rather it will always be attached to a post
    *
    * Sidenote: for various reasons not all comments will be visible, as they can be moderated
    * They can be hidden by the original poster or an official moderation member
    * */
    String display; // The string to display for the comment
    String history; // For moderation logs
    int editCount; // Keep track of the edits on a given comment
    boolean moderated; // If this comment has passed a moderation check
    boolean isVisible; // If this comment is allowed to be allowed under a post

    public Comment(String comment){
        this.history = "";
        this.editCount = 0;
        this.display = comment;
        this.moderated = false; // Make sure that the moderation is set to false, until it gets moderated
        this.isVisible = false; // Make suer that the post remains not visible until it gets moderated,
                                // yet can be hidden by the poster
    }

    public void editComment(String newComment){
        /*
         * This is the function to edit a comment, and change it to a new comment
         * */
        this.editCount += 1;
        this.history = " EDIT: " + this.editCount + this.display; // Very simple log to log all edits
        this.display = newComment;
        this.moderated = false;
        this.isVisible = false;
    }

    public void Moderate(){
        /*
         * Use the database to moderate the above comment, use the banned word list to determine if the comment is
         * post-able, or not.
         */
        this.moderated = true; // Just as default case for now, make it a conditional later once blacklist is set up
    }

    public void render(){
        // This method is a temporary placeholder for now
        // Maybe it should return a string or html object?
        // Perhaps this is the case
        // Tbd later
        this.isVisible = true; // temp placeholder to make it visible
    }
}
