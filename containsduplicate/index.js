const containsDuplicate = (nums) => {
  const containsDups = nums.reduce((acc, curr) => {
    if (acc[curr]) return true;
    acc[curr] = true;
    return acc;
  }, {});
  return Boolean(Math.max(containsDups, false));
};
