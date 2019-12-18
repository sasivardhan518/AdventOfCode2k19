var question =
    `--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?


--- Part Two ---
During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)`

let input = [
    89822,
    149236,
    106135,
    147663,
    91417,
    59765,
    66470,
    121156,
    148632,
    116660,
    90316,
    111666,
    142111,
    72595,
    139673,
    145157,
    77572,
    83741,
    79815,
    74693,
    139077,
    106066,
    125817,
    127827,
    103884,
    147289,
    81588,
    142651,
    69916,
    147214,
    71501,
    130067,
    60182,
    139195,
    115502,
    127751,
    95013,
    73411,
    125294,
    79809,
    118110,
    122547,
    145141,
    72231,
    138853,
    108119,
    139960,
    128665,
    107228,
    73416,
    54608,
    63811,
    72363,
    130546,
    61055,
    56786,
    127718,
    144953,
    149284,
    137318,
    109566,
    112866,
    148063,
    130570,
    67536,
    84011,
    123795,
    128098,
    51687,
    83758,
    59867,
    103122,
    77339,
    72126,
    71446,
    67162,
    112342,
    120248,
    137629,
    135736,
    139781,
    92512,
    105922,
    85458,
    148571,
    51173,
    135047,
    110175,
    93722,
    82611,
    128288,
    125225,
    104177,
    115081,
    78470,
    96167,
    138445,
    117778,
    100133,
    140047,
];


function aoc_2k19_1() {
    showQuestion(question);
    let result = input.reduce((pv, cv) => {
        return pv + aoc_2k19_1_2(cv);
    }, 0);

    return result;
}


function aoc_2k19_1_2(input) {
    let vals = [];
    while (input) {
        input = (Math.floor(input / 3));
        if (input && input - 2 > 0) {
            input = input - 2;
            vals.push(input);
        }
    }

    return vals.reduce((pv, cv) => pv + cv, 0);
}