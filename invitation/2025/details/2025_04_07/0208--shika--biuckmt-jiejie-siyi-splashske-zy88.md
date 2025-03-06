### Roster Details<br />
Team Name: Shika<br />
Roster: Biuckmt, jiejie, Siyi, splashske, Zy88<br />
Global Rank: [208](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [30]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  518.8<br />
<br />
Final Rank Value (518.8) = Starting Rank Value (500.4) + Head To Head Adjustments (18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 500.4


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
|            7 |       17 | 2025-02-27 | DogEvil                   | L   | 0.936      | -            | -                | -                | -         |   -12.10 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            6 |       26 | 2025-02-26 | Rare Atom                 | L   | 0.929      | -            | -                | -                | -         |    -4.25 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            5 |       39 | 2025-02-25 | Change The Game           | W   | 0.923      | 0.143        | 0.000 (0.000)    | 0.149 (0.020)    | 0 (0.000) |    13.81 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            4 |       64 | 2025-02-24 | Just Swing (Chinese team) | W   | 0.916      | 0.143        | 0.003 (0.000)    | 0.165 (0.022)    | 0 (0.000) |    19.31 | Biuckmt, jiejie, Siyi, splashske, Zy88 |
|            3 |      385 | 2025-02-09 | Unsettled Resentment      | L   | 0.821      | -            | -                | -                | -         |    -7.32 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |
|            2 |      417 | 2025-02-08 | Only One Word             | W   | 0.814      | 0.143        | 0.000 (0.000)    | 0.225 (0.026)    | 0 (0.000) |    15.89 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |
|            1 |      508 | 2025-02-06 | Unsettled Resentment      | L   | 0.802      | -            | -                | -                | -         |    -6.96 | Biuckmt, jiejie, S1kura, Siyi, Zy88    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
