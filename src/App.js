import React, { Fragment, PureComponent } from "react";
import { addUser, removeAllUsers } from "./actionCreator/users";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

let id = 0;

class App extends PureComponent {
  render() {
    const { users, addUser, removeAllUsers } = this.props;
    return (
      <Fragment>
        <button onClick={() => addUser(id++, `Alexandr ${id}`)}>
          Add User
        </button>
        <button onClick={removeAllUsers}>Delete All Users</button>
        {users.map(user => (
          <p key={user.id}>{`User: ${user.name}, id: ${user.id}`}</p>
        ))}
      </Fragment>
    );
  }
}

// const App = props => {
//   const { users, addUser, removeAllUsers } = props;
//   console.log(props);

//   return (
//     <Fragment>
//       <button onClick={() => addUser(id++, `Alexandr ${id}`)}>Add User</button>
//       <button onClick={removeAllUsers}>Delete All Users</button>
//       {users.map(user => (
//         <p key={user.id}>{`User: ${user.name}, id: ${user.id}`}</p>
//       ))}
//     </Fragment>
//   );
// };

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addUser: (id, name) => dispatch(addUser(id, name)),
  removeAllUsers: () => dispatch(removeAllUsers())
});

// const mapDispatchToProps = {
//   addUser,
//   removeAllUsers
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
