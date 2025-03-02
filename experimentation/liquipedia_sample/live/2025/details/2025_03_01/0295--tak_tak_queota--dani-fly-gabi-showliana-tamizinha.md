### Roster Details<br />
Team Name: Tak tak queota<br />
Roster: dani, fly, GaBi, showliana, tamizinha<br />
Global Rank: [295](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  640.5<br />
<br />
Final Rank Value (640.5) = Starting Rank Value (638.4) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.4
- 400 + ( ( 0.121 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 638.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      898 | 2024-12-28 | Atrix Esports       | L   | 0.781      | -            | -                | -                | -         |   -11.09 | dani, fly, GaBi, showliana, tamizinha       |
|           13 |      900 | 2024-12-28 | Capivaras           | W   | 0.781      | 0.250        | 0.001 (0.000)    | 0.043 (0.008)    | 0 (0.000) |     7.73 | dani, fly, GaBi, showliana, tamizinha       |
|           12 |     1646 | 2024-12-07 | Fluxo Demons        | L   | 0.642      | -            | -                | -                | -         |    -6.50 | cellax, fly, paranoid, showliana, tamizinha |
|           11 |     2085 | 2024-11-30 | Fluxo Demons        | L   | 0.593      | -            | -                | -                | -         |    -6.18 | Babs, dani, GaBi, hera, showliana           |
|           10 |     2166 | 2024-11-29 | Imperial Female     | L   | 0.587      | -            | -                | -                | -         |    -1.92 | Babs, dani, GaBi, hera, showliana           |
|            9 |     3691 | 2024-11-01 | Girls Gift          | W   | 0.402      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.15 | Babs, dani, GaBi, hera, showliana           |
|            8 |     3692 | 2024-11-01 | Girls Gift          | W   | 0.402      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.19 | Babs, dani, GaBi, hera, showliana           |
|            7 |     3741 | 2024-10-31 | Alternidade Reativa | W   | 0.395      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.45 | Babs, dani, GaBi, hera, showliana           |
|            6 |     3744 | 2024-10-31 | Alternidade Reativa | W   | 0.395      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.50 | Babs, dani, GaBi, hera, showliana           |
|            5 |     3790 | 2024-10-30 | Capivaras           | W   | 0.388      | 0.143        | 0.001 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     4.06 | Babs, dani, GaBi, hera, showliana           |
|            4 |     3792 | 2024-10-30 | Capivaras           | W   | 0.388      | 0.143        | 0.001 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     4.19 | Babs, dani, GaBi, hera, showliana           |
|            3 |     3854 | 2024-10-29 | Atrix Esports       | L   | 0.382      | -            | -                | -                | -         |    -5.68 | Babs, dani, GaBi, hera, showliana           |
|            2 |     3858 | 2024-10-29 | Atrix Esports       | W   | 0.382      | 0.143        | 0.005 (0.000)    | 0.236 (0.013)    | 0 (0.000) |     6.49 | Babs, dani, GaBi, hera, showliana           |
|            1 |     6384 | 2024-09-14 | Fluxo Demons        | W   | 0.081      | 0.250        | 0.020 (0.000)    | 0.234 (0.005)    | 0 (0.000) |     1.72 | dani, GaBi, hera, paranoid, tamizinha       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($919.65)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.781 | $250.00        | $195.35         |
| 2024-12-07 |      0.642 | $250.00        | $160.40         |
| 2024-12-01 |      0.601 | $836.91        | $502.96         |
| 2024-09-14 |      0.081 | $750.00        | $60.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
