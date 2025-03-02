### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slax<br />
Global Rank: [129](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  783.3<br />
<br />
Final Rank Value (783.3) = Starting Rank Value (697.1) + Head To Head Adjustments (86.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.1
- 400 + ( ( 0.151 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 697.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      320 | 2025-02-11 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -5.03 | abiraju, anttzz, frontales, Muk0s, slax |
|           13 |      335 | 2025-02-10 | Nexus Gaming         | W   | 1.000      | 0.143        | 0.186 (0.027)    | 0.861 (0.123)    | 0 (0.000) |    21.82 | abiraju, anttzz, frontales, Muk0s, slax |
|           12 |      353 | 2025-02-10 | GamerLegion          | L   | 1.000      | -            | -                | -                | -         |    -0.33 | abiraju, anttzz, frontales, Muk0s, slax |
|           11 |      425 | 2025-02-08 | Ex-Daystar           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.154 (0.022)    | 0 (0.000) |     9.23 | abiraju, anttzz, frontales, Muk0s, slax |
|           10 |      434 | 2025-02-08 | Natus Vincere Junior | W   | 1.000      | 0.143        | 0.091 (0.013)    | 1.000 (0.143)    | 0 (0.000) |    25.46 | abiraju, anttzz, frontales, Muk0s, slax |
|            9 |      441 | 2025-02-08 | PARIVISION           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.715 (0.102)    | 0 (0.000) |    19.07 | abiraju, anttzz, frontales, Muk0s, slax |
|            8 |      523 | 2025-02-07 | GUN5 Esports         | W   | 1.000      | 0.143        | 0.104 (0.015)    | 0.575 (0.082)    | 0 (0.000) |    25.84 | abiraju, anttzz, frontales, Muk0s, slax |
|            7 |      901 | 2024-12-28 | TRUMUJIKI89          | L   | 0.781      | -            | -                | -                | -         |   -14.24 | abiraju, anttzz, frontales, Muk0s, slax |
|            6 |      904 | 2024-12-28 | GOMEL APARTMENT      | W   | 0.780      | 0.250        | 0.000 (0.000)    | 0.040 (0.008)    | 0 (0.000) |     4.07 | abiraju, anttzz, frontales, Muk0s, slax |
|            5 |      908 | 2024-12-28 | Krujkipiva           | W   | 0.780      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.92 | abiraju, anttzz, frontales, Muk0s, slax |
|            4 |     1048 | 2024-12-21 | GOVNOVOZFM           | L   | 0.734      | -            | -                | -                | -         |   -13.83 | abiraju, anttzz, frontales, Muk0s, slax |
|            3 |     1057 | 2024-12-21 | MYSKILL              | W   | 0.734      | 0.250        | 0.002 (0.000)    | 0.142 (0.026)    | 0 (0.000) |    10.91 | abiraju, anttzz, frontales, Muk0s, slax |
|            2 |     1382 | 2024-12-13 | BadGuys              | L   | 0.680      | -            | -                | -                | -         |   -13.68 | abiraju, anttzz, frontales, Muk0s, slax |
|            1 |     1393 | 2024-12-13 | Nuclear TigeRES      | W   | 0.679      | 0.143        | 0.004 (0.000)    | 0.541 (0.053)    | 0 (0.000) |    13.04 | abiraju, anttzz, frontales, Muk0s, slax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($234.20)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.781 | $300.00        | $234.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
