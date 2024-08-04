const containsDuplicate = (nums) => {
  const containsDups = nums.reduce((acc, curr) => {
    if (acc[curr]) return true;
    acc[curr] = true;
    return acc;
  }, {});
  return Boolean(Math.max(containsDups, false));
};

// another way
const containsDuplicate2 = (nums) => {
  const result = nums.reduce(
    (acc, curr) => {
      acc.obj[curr] = (acc.obj[curr] || 0) + 1;

      if (!acc.found && acc.obj[curr] > 1) {
        acc.found = true;
      }

      return acc;
    },
    { obj: {}, found: false }
  );
  return result.found;
};
