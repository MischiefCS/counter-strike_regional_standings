### Roster Details<br />
Team Name: Denial (Danish team)<br />
Roster: Andree, lund, mertz, nellozz, smF<br />
Global Rank: [246](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [175]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  677.2<br />
<br />
Final Rank Value (677.2) = Starting Rank Value (662.0) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.0
- 400 + ( ( 0.133 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 662.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2459 | 2024-11-23 | Astralis Talent           | L   | 0.545      | -            | -                | -                | -         |    -6.17 | Andree, lund, mertz, nellozz, smF  |
|           16 |     2981 | 2024-11-14 | Sashi Academy             | W   | 0.487      | 0.339        | 0.001 (0.000)    | 0.280 (0.046)    | 0 (0.000) |     7.92 | Andree, lund, mertz, nellozz, smF  |
|           15 |     2998 | 2024-11-14 | WOPA Esport               | L   | 0.486      | -            | -                | -                | -         |    -4.77 | Andree, J3nsyy, lund, nellozz, smF |
|           14 |     3131 | 2024-11-11 | Preasy Esport             | W   | 0.467      | 0.339        | 0.012 (0.002)    | 0.682 (0.108)    | 0 (0.000) |     9.13 | Andree, lund, mertz, nellozz, smF  |
|           13 |     3138 | 2024-11-11 | XI Esport                 | L   | 0.467      | -            | -                | -                | -         |   -10.54 | Andree, lund, mertz, nellozz, smF  |
|           12 |     3144 | 2024-11-11 | Copenhagen Wolves Academy | W   | 0.467      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.37 | Andree, lund, mertz, nellozz, smF  |
|           11 |     3505 | 2024-11-04 | Sashi Academy             | W   | 0.421      | 0.339        | 0.001 (0.000)    | 0.280 (0.040)    | 0 (0.000) |     6.87 | Andree, lund, mertz, nellozz, smF  |
|           10 |     3922 | 2024-10-28 | Astralis Talent           | W   | 0.374      | 0.339        | 0.002 (0.000)    | 0.651 (0.082)    | 0 (0.000) |     6.72 | Andree, lund, mertz, nellozz, smF  |
|            9 |     3943 | 2024-10-28 | MASONIC                   | L   | 0.373      | -            | -                | -                | -         |    -5.72 | Andree, lund, mertz, nellozz, smF  |
|            8 |     4246 | 2024-10-21 | WOPA Esport               | L   | 0.327      | -            | -                | -                | -         |    -3.16 | Andree, lund, mertz, nellozz, smF  |
|            7 |     4949 | 2024-10-07 | MASONIC                   | W   | 0.233      | 0.339        | 0.001 (0.000)    | 0.258 (0.020)    | 0 (0.000) |     3.91 | Andree, lund, mertz, nellozz, smF  |
|            6 |     4953 | 2024-10-07 | Copenhagen Wolves Academy | W   | 0.233      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.30 | Andree, lund, mertz, nellozz, smF  |
|            5 |     4961 | 2024-10-07 | WOPA Esport               | W   | 0.233      | 0.339        | 0.031 (0.002)    | 0.828 (0.065)    | 0 (0.000) |     5.07 | Andree, lund, mertz, nellozz, smF  |
|            4 |     5882 | 2024-09-23 | Preasy Esport             | W   | 0.140      | 0.339        | 0.012 (0.001)    | 0.682 (0.032)    | 0 (0.000) |     3.05 | Andree, lund, mertz, nellozz, smF  |
|            3 |     5893 | 2024-09-23 | Astralis Talent           | W   | 0.140      | 0.339        | 0.002 (0.000)    | 0.651 (0.031)    | 0 (0.000) |     2.73 | Andree, lund, mertz, nellozz, smF  |
|            2 |     6293 | 2024-09-16 | XI Esport                 | L   | 0.094      | -            | -                | -                | -         |    -2.07 | Andree, lund, mertz, nellozz, smF  |
|            1 |     6300 | 2024-09-16 | Sashi Academy             | L   | 0.093      | -            | -                | -                | -         |    -1.37 | Andree, lund, mertz, nellozz, smF  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($381.86)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.547 | $698.53        | $381.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
