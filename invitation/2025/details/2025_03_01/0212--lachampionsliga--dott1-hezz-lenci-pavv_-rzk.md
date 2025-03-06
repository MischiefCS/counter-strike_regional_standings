### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, pavv+, rzk<br />
Global Rank: [212](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  611.2<br />
<br />
Final Rank Value (611.2) = Starting Rank Value (649.6) + Head To Head Adjustments (-38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.6
- 400 + ( ( 0.129 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 649.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      429 | 2025-02-08 | Legacy                   | L   | 1.000      | -            | -                | -                | -         |    -5.60 | dott1, Hezz, lenci, pavv+, rzk   |
|           14 |      483 | 2025-02-07 | Tropa do KinGui          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.11 | dott1, Hezz, lenci, pavv+, rzk   |
|           13 |      776 | 2024-12-21 | Game Hunters             | L   | 0.734      | -            | -                | -                | -         |   -10.36 | dott1, Hezz, lenci, nacho, pavv+ |
|           12 |      797 | 2024-12-19 | Team Solid               | L   | 0.721      | -            | -                | -                | -         |    -6.12 | dott1, Hezz, lenci, nacho, pavv+ |
|           11 |      812 | 2024-12-18 | Bad News Chickens        | L   | 0.713      | -            | -                | -                | -         |   -10.37 | dott1, Hezz, lenci, nacho, pavv+ |
|           10 |      828 | 2024-12-16 | 20/70                    | W   | 0.701      | 0.384        | 0.001 (0.000)    | 0.139 (0.037)    | 0 (0.000) |    10.55 | dott1, Hezz, lenci, nacho, pavv+ |
|            9 |      864 | 2024-12-14 | Players (Brazilian team) | W   | 0.688      | 0.384        | 0.008 (0.002)    | 0.566 (0.150)    | 0 (0.000) |    14.20 | dott1, Hezz, lenci, nacho, pavv+ |
|            8 |     1310 | 2024-11-22 | BESTIA Academy           | W   | 0.539      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.68 | dott1, Hezz, lenci, pavv+, rzk   |
|            7 |     1360 | 2024-11-20 | Joga de terno            | L   | 0.527      | -            | -                | -                | -         |   -11.14 | dott1, Hezz, lenci, pavv+, rzk   |
|            6 |     1383 | 2024-11-18 | ShindeN                  | L   | 0.514      | -            | -                | -                | -         |    -6.71 | dott1, Hezz, lenci, pavv+, rzk   |
|            5 |     1680 | 2024-11-03 | 9z Academy               | L   | 0.414      | -            | -                | -                | -         |    -8.51 | dott1, Hezz, lenci, pavv+, rzk   |
|            4 |     1732 | 2024-11-01 | BeBold.gg                | W   | 0.399      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.56 | dott1, Hezz, lenci, pavv+, rzk   |
|            3 |     1769 | 2024-10-30 | Yawara E-Sports          | L   | 0.386      | -            | -                | -                | -         |    -5.81 | dott1, Hezz, lenci, pavv+, rzk   |
|            2 |     1786 | 2024-10-29 | VELOX Argentina          | L   | 0.379      | -            | -                | -                | -         |    -8.13 | dott1, Hezz, lenci, pavv+, rzk   |
|            1 |     1988 | 2024-10-11 | ShindeN                  | L   | 0.262      | -            | -                | -                | -         |    -3.75 | dott1, Hezz, lenci, pavv+, rzk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($940.30)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.262 | $3,590.65      | $940.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
