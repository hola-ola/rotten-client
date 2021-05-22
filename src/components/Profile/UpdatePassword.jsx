import React from "react";

function UpdatePassword() {
  return (
    <form>
      <div>
        <label>Current password</label>
        <input name="password" plaeholder="Current password" />
      </div>
      <div>
        <label>New password</label>
        <input name="password" plaeholder="New password" />
      </div>
      <div>
        <label>Confirm new password</label>
        <input name="password" plaeholder="New password" />
      </div>
      <div tabindex="0" role="button">
        <button>Submit the changes</button>
      </div>
    </form>
  );
}

export default UpdatePassword;
