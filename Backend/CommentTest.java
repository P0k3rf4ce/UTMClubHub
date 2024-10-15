import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

/**
 * Unit tests for the Comment class, ensuring that comments behave as expected
 * when created, edited, moderated, and rendered.
 */
public class CommentTest {

    @Test
    public void testCreateComment() {
        // Test comment creation and verify initial properties are correctly set
        Comment comment = new Comment(""); // Empty comment
        Comment comment2 = new Comment("Hello there! My name is Walter White!");
        Comment comment3 = new Comment("123445556 is my credit card information!");

        // Ensure comments are not null after creation
        assertNotEquals(comment, null);
        assertNotEquals(comment2, null);
        assertNotEquals(comment3, null);

        // Verify the properties of comment2
        assertEquals(comment2.display, "Hello there! My name is Walter White!");
        assertEquals(comment2.history, "");          // History should be empty upon creation
        assertEquals(comment2.editCount, 0);         // Edit count should be 0 initially
        assertEquals(comment2.isVisible, false);     // Comment should not be visible initially
        assertEquals(comment2.moderated, false);     // Comment should not be moderated initially
    }

    @Test
    public void editComment() {
        // Test editing a comment and ensure that the edit count, history, moderation, and visibility are updated
        Comment comment2 = new Comment("Hello there! My name is Walter White!");

        // Moderate and render the comment before editing
        comment2.Moderate(); // The comment should now be moderated
        comment2.render();   // The comment should now be visible

        // Edit the comment with new content
        comment2.editComment("My name is burger king plane guy!");

        // Verify that edit count and history are updated correctly
        assertEquals(comment2.editCount, 1); // Edit count should increase to 1
        assertEquals(comment2.history, " EDIT 0: Hello there! My name is Walter White!"); // Previous comment logged in history

        // Verify that moderation and visibility are reset after the edit
        assertEquals(comment2.isVisible, false);    // Should not be visible after edit
        assertEquals(comment2.moderated, false);    // Should require re-moderation
        assertEquals(comment2.display, "My name is burger king plane guy!"); // New content should be displayed
    }

    @Test
    public void Moderate() {
        // Test that a comment can be moderated
        Comment comment2 = new Comment("Hello there! My name is Walter White!");

        // Initially, the comment should not be moderated
        assertEquals(comment2.moderated, false);

        // Moderate the comment
        comment2.Moderate();

        // Verify that the comment is now marked as moderated
        assertEquals(comment2.moderated, true);
    }

    @Test
    public void render() {
        // Test that a comment can be made visible after moderation
        Comment comment2 = new Comment("E");

        // Moderate the comment before rendering it
        comment2.Moderate();

        // Initially, the comment should not be visible
        assertEquals(comment2.isVisible, false);

        // Render the comment, making it visible
        comment2.render();

        // Verify that the comment is now visible
        assertEquals(comment2.isVisible, true);
    }
}
