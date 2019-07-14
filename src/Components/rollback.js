/* eslint-disable no-lone-blocks */
// -------------From Navbar.js--------------
{
  /* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={Home}>Navbar</Navbar.Brand>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/brands">BRANDS</NavLink>
            </li>
            <li>
              <NavLink to="/chocolates">CHOCOLATES</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SIGN UP</NavLink>
            </li>
            <li>
              <form>
                <NavLink to="/search">
                  <input
                    type="text"
                    value={this.props.searchWord}
                    onChange={e => {
                      this.props.dispatch(
                        change_input("searchWord", e.target.value)
                      );
                    }}
                  />
                </NavLink>
                <NavLink to="/search">
                  <input type="submit" value="search" />
                </NavLink>
              </form>
            </li>
          </ul>
        </Navbar> */
}

// ---------------------Home.js-------------
{
  /* <>
        <Types />
        {!this.props.isLoggedIn && <Login />}
        {this.props.isLoggedIn && (
          <>
            <p>
              Welcome{" "}
              {this.props.currentUser.firstName +
                " " +
                this.props.currentUser.lastName}
            </p>
          </>
        )}
      </> */
}

//--------------Login.js------------------

{
  /* <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Email:</label>
          <input
            type="email"
            value={this.props.email}
            onChange={e =>
              this.props.dispatch(change_input("loginEmail", e.target.value))
            }
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={this.props.password}
            onChange={e =>
              this.props.dispatch(change_input("loginPassword", e.target.value))
            }
            required
          />
          <br />
          {this.props.error_msg === "Email does not exist, Please Sign Up." && (
            <p>--{this.props.error_msg}</p>
          )}
          {this.props.error_msg === "Incorrect Password" && (
            <p>--{this.props.error_msg}</p>
          )}
          <input type="submit" value="LOGIN" />
        </form>
      </> */
}

//-------------Home.js------------

{
  /* <>
        <Types />
        {!this.props.isLoggedIn && <Login />}
        {this.props.isLoggedIn && (
          <>
            <p>
              Welcome{" "}
              {this.props.currentUser.firstName +
                " " +
                this.props.currentUser.lastName}
            </p>
          </>
        )}
      </> */
}
