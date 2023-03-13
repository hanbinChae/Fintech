let car1 = {
    carname: "sonata",
    carPh: 130,
    start: function () {
      console.log("engine start");
    },
    stop: () => {
      console.log("engine stop");
    },
  };

  let car2 = {
    carname: "BMW",
    carPh: 500,
    start: function () {
      console.log("engine start");
    },
    stop: () => {
      console.log("engine stop");
    },
  };

  let car3 = {
    carname: "Porsche",
    carPh: 660,
    start: function () {
      console.log("engine start");
    },
    stop: () => {
      console.log("engine stop");
    },
  };

let cars = [car1,car2,car3];
let searchValue = "BMW";

cars.map(({ carname, carPh, start }) => {
  if (carname === searchValue) {
    console.log(carPh);
    start();
  }
});