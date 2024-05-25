const displayUsers = (tab, payload) => {
  let users = [];

  switch (tab) {
    case 0:
      // users = this.$store.state.tableData;
      users = payload;
      break;

    case 1:
      payload.forEach((i) => {
        if (i.paymentStatus == "Paid") {
          users.push(i);
        }
      });
      break;

    case 2:
      payload.forEach((i) => {
        if (i.paymentStatus == "Unpaid") {
          users.push(i);
        }
      });
      break;

    case 3:
      payload.forEach((i) => {
        if (i.paymentStatus == "Overdue") {
          users.push(i);
        }
      });

      break;

    default:
      users = payload;
      break;
  }
  return users;
};

const searchUsersInput = (input, payload) => {
  let users = [];
  const lowerCaseInput = input.toLowerCase();

  payload.forEach((i) => {
    if (
      i.name.toLowerCase().includes(lowerCaseInput) ||
      i.email.includes(input) ||
      i.datePaid.includes(input)
    ) {
      // alert("here");
      users.push(i);
    }
  });

  return users;
};

export { displayUsers, searchUsersInput };
