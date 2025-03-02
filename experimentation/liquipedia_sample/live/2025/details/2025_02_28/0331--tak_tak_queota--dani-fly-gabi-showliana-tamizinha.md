### Roster Details<br />
Team Name: Tak tak queota<br />
Roster: dani, fly, GaBi, showliana, tamizinha<br />
Global Rank: [331](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [66]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  648.6<br />
<br />
Final Rank Value (648.6) = Starting Rank Value (650.7) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.7
- 400 + ( ( 0.121 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 650.7


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
|           14 |     1144 | 2024-12-28 | Atrix Esports       | L   | 0.788      | -            | -                | -                | -         |   -11.41 | dani, fly, GaBi, showliana, tamizinha       |
|           13 |     1145 | 2024-12-28 | Capivaras           | W   | 0.787      | 0.250        | 0.001 (0.000)    | 0.043 (0.008)    | 0 (0.000) |     7.78 | dani, fly, GaBi, showliana, tamizinha       |
|           12 |     1912 | 2024-12-07 | Fluxo Demons        | L   | 0.648      | -            | -                | -                | -         |   -10.31 | cellax, fly, paranoid, showliana, tamizinha |
|           11 |     2320 | 2024-11-30 | MIBR Female         | L   | 0.600      | -            | -                | -                | -         |    -6.04 | Babs, dani, GaBi, hera, showliana           |
|           10 |     2389 | 2024-11-29 | Imperial Female     | L   | 0.593      | -            | -                | -                | -         |    -1.36 | Babs, dani, GaBi, hera, showliana           |
|            9 |     3942 | 2024-11-01 | Girls Gift          | W   | 0.408      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.07 | Babs, dani, GaBi, hera, showliana           |
|            8 |     3943 | 2024-11-01 | Girls Gift          | W   | 0.408      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.11 | Babs, dani, GaBi, hera, showliana           |
|            7 |     3997 | 2024-10-31 | Alternidade Reativa | W   | 0.401      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.36 | Babs, dani, GaBi, hera, showliana           |
|            6 |     4001 | 2024-10-31 | Alternidade Reativa | W   | 0.401      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.41 | Babs, dani, GaBi, hera, showliana           |
|            5 |     4049 | 2024-10-30 | Capivaras           | W   | 0.395      | 0.143        | 0.001 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     4.08 | Babs, dani, GaBi, hera, showliana           |
|            4 |     4051 | 2024-10-30 | Capivaras           | W   | 0.394      | 0.143        | 0.001 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     4.20 | Babs, dani, GaBi, hera, showliana           |
|            3 |     4115 | 2024-10-29 | Atrix Esports       | L   | 0.388      | -            | -                | -                | -         |    -5.84 | Babs, dani, GaBi, hera, showliana           |
|            2 |     4118 | 2024-10-29 | Atrix Esports       | W   | 0.388      | 0.143        | 0.006 (0.000)    | 0.289 (0.016)    | 0 (0.000) |     6.53 | Babs, dani, GaBi, hera, showliana           |
|            1 |     6755 | 2024-09-14 | Quem sao elas       | W   | 0.087      | 0.250        | 0.001 (0.000)    | 0.021 (0.000)    | 0 (0.000) |     1.30 | dani, GaBi, hera, paranoid, tamizinha       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($932.44)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.788 | $250.00        | $196.91         |
| 2024-12-07 |      0.648 | $250.00        | $161.96         |
| 2024-12-01 |      0.607 | $836.91        | $508.17         |
| 2024-09-14 |      0.087 | $750.00        | $65.40          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
