### Roster Details<br />
Team Name: Shika<br />
Roster: Biuckmt, jiejie, Siyi, splashske, Zy88<br />
Global Rank: [103](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  400.5<br />
<br />
Final Rank Value (400.5) = Starting Rank Value (401.6) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       17 | 2025-02-27 | DogEvil                   | L   | 0.329      | -            | -                | -                | -         |    -5.01 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            6 |       26 | 2025-02-26 | Rare Atom                 | L   | 0.323      | -            | -                | -                | -         |    -4.83 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            5 |       39 | 2025-02-25 | Change The Game           | W   | 0.317      | 0.143        | 0.000 (0.000)    | 0.249 (0.011)    | 0 (0.000) |     5.00 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            4 |       64 | 2025-02-24 | Just Swing (Chinese team) | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.080 (0.004)    | 0 (0.000) |     4.80 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            3 |      385 | 2025-02-09 | Unsettled Resentment      | L   | 0.215      | -            | -                | -                | -         |    -2.28 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |
|            2 |      417 | 2025-02-08 | Only One Word             | W   | 0.208      | 0.143        | 0.000 (0.000)    | 0.377 (0.011)    | 0 (0.000) |     3.29 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |
|            1 |      508 | 2025-02-06 | Unsettled Resentment      | L   | 0.195      | -            | -                | -                | -         |    -2.08 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
