import Character from "../src/character/character.js";
import Magician from "../src/character/magician.js";
import Daemon from "../src/character/daemon.js";

test ("test magician", () => {
  let mag = new Magician("Maga");
  mag.stoned();
  mag.attacked = 2;

  const received1 = mag.distanceAttack;
  const expected1 = 85;
  const received2 = mag.distance;
  const expected2 = 2;
  const received3 = mag.stone;
  const expected3 = true;

  expect(received1).toEqual(expected1);
  expect(received2).toEqual(expected2);
  expect(received3).toEqual(expected3);

  mag.stoned();
  const received4 = mag.stone;
  const expected4 = false;
  expect(received4).toEqual(expected4);
});

test ("test Daemon", () => {
  let dem = new Daemon("Dem");
  dem.stoned();
  dem.attacked = 2;

  const received1 = dem.distanceAttack;
  const expected1 = 85;
  const received2 = dem.distance;
  const expected2 = 2;
  const received3 = dem.stone;
  const expected3 = true;

  expect(received1).toEqual(expected1);
  expect(received2).toEqual(expected2);
  expect(received3).toEqual(expected3);

  dem.stoned();
  const received4 = dem.stone;
  const expected4 = false;
  expect(received4).toEqual(expected4);
});
