### Roster Details<br />
Team Name: Underground Esports Club<br />
Roster: coops, jBr, Mechanical, N1ghtraid, vanillaicey<br />
Global Rank: [272](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  596.6<br />
<br />
Final Rank Value (596.6) = Starting Rank Value (610.7) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.7
- 400 + ( ( 0.108 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 610.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      204 | 2025-02-19 | Justice For Tomorrow             | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.482 (0.069)    | 0 (0.000) |    19.78 | coops, jBr, Mechanical, N1ghtraid, vanillaicey  |
|           13 |      205 | 2025-02-19 | VerySerious                      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.53 | coops, jBr, Mechanical, N1ghtraid, vanillaicey  |
|           12 |      413 | 2025-02-13 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |   -13.12 | alecc, coops, Mechanical, N1ghtraid, Omichella  |
|           11 |      888 | 2025-02-01 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |   -16.53 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|           10 |     1434 | 2024-12-15 | MANTRA                           | L   | 0.691      | -            | -                | -                | -         |   -10.99 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            9 |     1483 | 2024-12-14 | Above The Rest (Australian team) | W   | 0.684      | 0.143        | 0.000 (0.000)    | 0.104 (0.010)    | 0 (0.000) |     5.64 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            8 |     1555 | 2024-12-13 | TALON                            | L   | 0.677      | -            | -                | -                | -         |   -11.55 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            7 |     1715 | 2024-12-08 | Vantage Esports                  | L   | 0.644      | -            | -                | -                | -         |    -9.44 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            6 |     1766 | 2024-12-07 | Above The Rest (Australian team) | W   | 0.638      | 0.270        | 0.000 (0.000)    | 0.104 (0.018)    | 0 (0.000) |     4.88 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            5 |     1807 | 2024-12-06 | Shanghai Sharks                  | W   | 0.631      | 0.270        | 0.000 (0.000)    | 0.068 (0.012)    | 0 (0.000) |     6.71 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            4 |     1843 | 2024-12-05 | Altered Edge                     | W   | 0.624      | 0.270        | 0.000 (0.000)    | 0.033 (0.005)    | 0 (0.000) |     4.71 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            3 |     1889 | 2024-12-04 | Gods Work                        | W   | 0.618      | 0.270        | 0.000 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     4.90 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            2 |     1934 | 2024-12-03 | GCSY                             | W   | 0.611      | 0.270        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.71 | coops, Mechanical, mpr, N1ghtraid, Rahley       |
|            1 |     2073 | 2024-12-01 | Shanghai Sharks                  | L   | 0.598      | -            | -                | -                | -         |   -12.35 | coops, Mechanical, mpr, N1ghtraid, Rahley       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($386.33)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.644 | $600.00        | $386.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
