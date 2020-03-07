const createTipper = baseTip => {
  return amount => {
    return amount * baseTip;
  };
};

const tip1 = createTipper(0.2);
const tip3 = createTipper(0.3);

console.log(tip1(100));
console.log(tip3(200));
