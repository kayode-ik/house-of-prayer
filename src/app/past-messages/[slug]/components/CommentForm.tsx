import React from "react";

const CommentForm = () => {
  return (
    <div className="comment-form container">
      <h2>Leave a Reply</h2>
      <p>Your email address will not be published. Required fields are marked *</p>

      <form>
        <textarea placeholder="Comment *" required></textarea>

        <div className="form-row">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Website" />
        </div>

        <div className="checkbox">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">
            Save my name, email, and website in this browser for next time.
          </label>
        </div>

        <button type="submit" className="btn-submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
