"use client";

import styles from "../styles/Form.module.css";

const Form = ({ post, setPost, handleSubmit, submitting }) => {
  return (
    <div className={styles.container}>
      <div className={styles.formHeading}>
        <h2>Create Amazing Post</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message" className={styles.label}>
            Post Content
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your post content here"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            className={styles.textareaField}
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.label}>
            Tag <span className={styles.tags}>(#webdev, #ml, #ai)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="#tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className={styles.inputField}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.formBtn} ${styles.cancelBtn}`}
            onClick={() => setPost({ ...post, content: "", tag: "" })}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${styles.formBtn} ${styles.submitBtn}`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
