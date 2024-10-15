import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

public class CommentTest {

    @Test
    public void testCreateComment() {
        // Ensure that a comment is created, and that it's default properties are the same as expected
        Comment comment = new Comment("");
        Comment comment2 = new Comment("Hello there! My name is Walter White!");
        Comment comment3 = new Comment("123445556 is my credit card information!");

        assertNotEquals(comment, null);
        assertNotEquals(comment2, null);
        assertNotEquals(comment3, null);

        assertEquals(comment2.display, "Hello there! My name is Walter White!");
        assertEquals(comment2.history, "");
        assertEquals(comment2.editCount, 0);
        assertEquals(comment2.isVisible, false);
        assertEquals(comment2.moderated, false);
    }

    @Test
    public void editComment() {
        // Ensure that a comment that was posted, gets changed has its editCount updated, gets its history updated,
        // and make sure that the moderation is reset / visibility once edited!
        Comment comment2 = new Comment("Hello there! My name is Walter White!");
        comment2.Moderate(); // Should be moderated
        comment2.render(); // Should be now visible
        comment2.editComment("My name is burger king plane guy!");

        assertEquals(comment2.editCount, 1); // Ensure edit count got updated
        assertEquals(comment2.history, " EDIT 0: Hello there! My name is Walter White!"); // Ensure history logged
        assertEquals(comment2.isVisible, false);
        assertEquals(comment2.moderated, false);
        assertEquals(comment2.display, "My name is burger king plane guy!");
    }

    @Test
    public void Moderate() {
        // Use a **fake** database to moderate the given comment
        // Todo
        Comment comment2 = new Comment("Hello there! My name is Walter White!");
        assertEquals(comment2.moderated, false);
        comment2.Moderate();
        assertEquals(comment2.moderated, true);
    }

    @Test
    public void render() {
        // Make it so that the comment is now renderable!
        Comment comment2 = new Comment("E");
        comment2.Moderate();
        assertEquals(comment2.isVisible, false);
        comment2.render();
        assertEquals(comment2.isVisible, true);
    }
}
