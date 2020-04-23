import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PasswordSent extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label type="text" className="password-sent">We've sent your password to your email address</label>
        </div>

        <p className="sign-in text-right">
          <Link className="nav-link" to="/sign-in">Back to home page</Link>
        </p>
      </form>
    );
  }
}
