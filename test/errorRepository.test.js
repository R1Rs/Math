import Character from "../src/character js/character.js";
import Magician from "../src/character js/magician.js";
import Daemon from "../src/character js/daemon.js";

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
  let mag = new Daemon("Maga");
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
