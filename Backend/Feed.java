import java.util.ArrayList;

public class Feed {
    /*
     * This class represents a basic feed for the App. The feed object will display posts for a given user.
     */
    public ArrayList<Post> posts;

    public Feed(){
        /* Create a new empty feed */
        this.posts = new ArrayList<Post>();
    }

    public void hidePosts(ArrayList<String> tags){
        /* Hide all the posts that have the not wanted tags
        * TODO: Change it to a set to make searching it faster
        */
        /**
        for (String tag : tags) {
            for (Post post : posts) {
                if (post.tags.contains(tag)) {
                    post.postVisible = false;
                }
            }
        }
         */
    }

    public void showPosts(ArrayList<String> tags){
        /* Show all the posts that have the not wanted tags
         * TODO: Change it to a set to make searching it faster
         */
        /**
        for (String tag : tags) {
            for (Post post : posts) {
                if (post.tags.contains(tag)) {
                    post.postVisible = true;
                }
            }
        }
         */
    }

    public void addPost(Post x){
        /* Add a post to the feed */
        this.posts.add(x);
    }

    public void render(){
        // TODO: Figure out how to render the full feed
    }

    
}
