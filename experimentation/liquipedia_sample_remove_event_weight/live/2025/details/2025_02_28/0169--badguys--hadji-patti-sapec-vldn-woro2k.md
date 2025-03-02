### Roster Details<br />
Team Name: BadGuys<br />
Roster: hAdji, Patti, Sapec, VLDN, Woro2k<br />
Global Rank: [169](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [121]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  837.1<br />
<br />
Final Rank Value (837.1) = Starting Rank Value (757.3) + Head To Head Adjustments (79.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.395[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.3
- 400 + ( ( 0.179 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 757.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1078 | 2025-01-09 | KONO.ECF                   | L   | 0.866      | -            | -                | -                | -         |   -16.11 | hAdji, Patti, Sapec, VLDN, Woro2k |
|           11 |     1082 | 2025-01-08 | FLuffy Gangsters           | W   | 0.860      | 1.000        | 0.017 (0.015)    | 1.000 (0.860)    | 0 (0.000) |    19.05 | hAdji, Patti, Sapec, VLDN, Woro2k |
|           10 |     1089 | 2025-01-06 | WOPA Esport                | W   | 0.845      | 1.000        | 0.037 (0.031)    | 0.845 (0.713)    | 0 (0.000) |    18.87 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            9 |     1092 | 2025-01-05 | Los kogutos                | L   | 0.838      | -            | -                | -                | -         |    -6.90 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            8 |     1100 | 2025-01-03 | ECSTATIC                   | L   | 0.824      | -            | -                | -                | -         |    -3.05 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            7 |     1155 | 2024-12-28 | GenOne                     | W   | 0.786      | 1.000        | 0.015 (0.012)    | 0.839 (0.659)    | 0 (0.000) |    18.34 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            6 |     1355 | 2024-12-20 | Nuclear TigeRES            | W   | 0.734      | 1.000        | 0.005 (0.004)    | 0.531 (0.390)    | 0 (0.000) |    14.77 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            5 |     1363 | 2024-12-20 | NEVERMORE (Ukrainian team) | W   | 0.734      | 1.000        | 0.012 (0.009)    | 0.977 (0.716)    | 0 (0.000) |    17.96 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            4 |     1373 | 2024-12-20 | Dragon Esports Club        | W   | 0.733      | 1.000        | 0.008 (0.006)    | 0.336 (0.246)    | 0 (0.000) |    12.22 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            3 |     1640 | 2024-12-13 | Megoshort                  | L   | 0.686      | -            | -                | -                | -         |   -16.09 | hAdji, Kvem, Sapec, Topa, Woro2k  |
|            2 |     1644 | 2024-12-13 | Hesta                      | W   | 0.686      | 1.000        | 0.003 (0.002)    | 0.502 (0.344)    | 0 (0.000) |    15.91 | hAdji, Kvem, Sapec, Topa, Woro2k  |
|            1 |     1650 | 2024-12-13 | WW Team                    | W   | 0.686      | 1.000        | 0.000 (0.000)    | 0.031 (0.021)    | 0 (0.000) |     4.76 | hAdji, Kvem, Sapec, Topa, Woro2k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
