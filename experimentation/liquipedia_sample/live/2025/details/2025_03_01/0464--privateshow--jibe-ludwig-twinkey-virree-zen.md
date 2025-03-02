### Roster Details<br />
Team Name: Privateshow<br />
Roster: JiBe, Ludwig, Twinkey, virree, zen<br />
Global Rank: [464](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [290]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  525.7<br />
<br />
Final Rank Value (525.7) = Starting Rank Value (518.2) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.2
- 400 + ( ( 0.060 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 518.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3529 | 2024-11-04 | Alliance             | L   | 0.420      | -            | -                | -                | -         |    -1.52 | JiBe, Ludwig, Twinkey, virree, zen |
|            4 |     3763 | 2024-10-31 | Venom (Swedish team) | W   | 0.393      | 0.268        | 0.000 (0.000)    | 0.069 (0.007)    | 0 (0.000) |     5.86 | JiBe, Ludwig, Twinkey, virree, zen |
|            3 |     5307 | 2024-10-01 | Northern Lights      | W   | 0.193      | 0.268        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.08 | JiBe, Ludwig, Twinkey, virree, zen |
|            2 |     6188 | 2024-09-18 | NIP Svea             | W   | 0.106      | 0.268        | 0.000 (0.000)    | 0.053 (0.001)    | 0 (0.000) |     1.14 | JiBe, Ludwig, Twinkey, virree, zen |
|            1 |     6983 | 2024-09-05 | Alliance             | L   | 0.020      | -            | -                | -                | -         |    -0.07 | JiBe, Ludwig, Twinkey, virree, zen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($219.93)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-13 |      0.480 | $458.19        | $219.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
