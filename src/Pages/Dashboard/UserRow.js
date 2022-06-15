import React from 'react';

const UserRow = ({ user }) => {
  // console.log(user);
    // const { email } = user;
    return (
        <tr>
        <th>1</th>
        <td>Goldman</td>
        {/* <td>{email}</td> */}
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    );
};

export default UserRow;