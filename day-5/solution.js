const fs = require('fs');
const readline = require('readline');

async function processCrates(stacks, input) {
  const fileStream = fs.createReadStream(input);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
	const [,count,from,to] = line.match(/move (\d+) from (\d+) to (\d+)/)

	const fromIndex = +from - 1;
	const toIndex = +to - 1;
	const countNumber = +count;
	console.log(line)
	const droppedCreates = stacks[fromIndex].splice(-countNumber, countNumber);
	droppedCreates.reverse();
	stacks[toIndex].push(...droppedCreates);
	console.table(stacks);
  }

  const resultantTop = stacks.map(stack => stack.slice(-1)[0]);

  console.log(resultantTop.join(''));
}


/**
            [J]             [B] [W]
            [T]     [W] [F] [R] [Z]
        [Q] [M]     [J] [R] [W] [H]
    [F] [L] [P]     [R] [N] [Z] [G]
[F] [M] [S] [Q]     [M] [P] [S] [C]
[L] [V] [R] [V] [W] [P] [C] [P] [J]
[M] [Z] [V] [S] [S] [V] [Q] [H] [M]
[W] [B] [H] [F] [L] [F] [J] [V] [B]
 1   2   3   4   5   6   7   8   9
 */

const stacks = [
	['W', 'M', 'L', 'F'],
	['B', 'Z', 'V', 'M', 'F'],
	['H', 'V', 'R','S', 'L', 'Q' ],
	['F', 'S', 'V', 'Q', 'P', "M", 'T', 'J'],
	['L', 'S', 'W'],
	['F','V','P','M','R','J','W'],
	['J','Q','C', 'P','N','R','F'],
	['V','H','P','S','Z','W','R','B'],
	['B','M','J','C','G','H','Z','W']
];

processCrates(stacks, 'input.txt');
