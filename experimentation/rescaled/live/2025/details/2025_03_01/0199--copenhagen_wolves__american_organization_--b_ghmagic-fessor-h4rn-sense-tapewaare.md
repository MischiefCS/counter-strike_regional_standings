### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: BøghmagiC, Fessor, h4rn, sense, Tapewaare<br />
Global Rank: [199](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [121]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  626.8<br />
<br />
Final Rank Value (626.8) = Starting Rank Value (622.4) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.4
- 400 + ( ( 0.117 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 622.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2803 | 2024-09-17 | FAVBET Team      | L   | 0.100      | -            | -                | -                | -         |    -0.50 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            6 |     2840 | 2024-09-15 | FLuffy Gangsters | W   | 0.087      | 0.372        | 0.005 (0.000)    | 0.419 (0.013)    | 0 (0.000) |     1.72 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            5 |     2909 | 2024-09-13 | Daystar          | W   | 0.073      | 0.372        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.13 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            4 |     2984 | 2024-09-11 | Dynamo Eclot     | W   | 0.059      | 0.372        | 0.126 (0.003)    | 0.674 (0.015)    | 0 (0.000) |     1.77 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            3 |     3078 | 2024-09-07 | Endpoint         | L   | 0.032      | -            | -                | -                | -         |    -0.29 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            2 |     3137 | 2024-09-05 | UNiTY esports    | W   | 0.019      | 0.372        | 0.025 (0.000)    | 0.177 (0.001)    | 0 (0.000) |     0.45 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |
|            1 |     3205 | 2024-09-03 | Leo Team         | W   | 0.006      | 0.372        | 0.023 (0.000)    | 0.508 (0.001)    | 0 (0.000) |     0.14 | BøghmagiC, Fessor, h4rn, sense, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($250.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.125 | $2,000.00      | $250.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
