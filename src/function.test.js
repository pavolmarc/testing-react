import {sum, random} from './Components/Maths'

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});


// it('generates random number up to', () => {
//     expect(random(10)).toBeLessThan(10);
//   });
