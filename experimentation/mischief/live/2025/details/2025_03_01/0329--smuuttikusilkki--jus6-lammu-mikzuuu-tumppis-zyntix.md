### Roster Details<br />
Team Name: Smuuttikusilkki<br />
Roster: JUS6, lammu, Mikzuuu, Tumppis, zyntix<br />
Global Rank: [329](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [184]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  437.0<br />
<br />
Final Rank Value (437.0) = Starting Rank Value (403.2) + Head To Head Adjustments (33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.2
- 400 + ( ( 0.002 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 403.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      284 | 2025-02-16 | FCottoNd          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.214 (0.031)    | 0 (0.000) |    16.22 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|           12 |      502 | 2025-02-10 | JANO Esports      | L   | 1.000      | -            | -                | -                | -         |    -3.65 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|           11 |      680 | 2025-02-06 | HAVU              | L   | 1.000      | -            | -                | -                | -         |    -5.35 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|           10 |      855 | 2025-02-03 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |    -4.04 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            9 |      926 | 2025-01-30 | Ex-UHKA eSports   | L   | 1.000      | -            | -                | -                | -         |   -11.66 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            8 |      950 | 2025-01-27 | SAUCEMEN          | W   | 0.980      | 0.143        | 0.000 (0.000)    | 0.103 (0.014)    | 0 (0.000) |    13.94 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            7 |      963 | 2025-01-25 | Heimo Esports     | L   | 0.965      | -            | -                | -                | -         |    -5.78 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            6 |      978 | 2025-01-19 | TOOMUCHVIDEOGAMES | W   | 0.927      | 0.143        | 0.000 (0.000)    | 0.052 (0.007)    | 0 (0.000) |    12.61 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            5 |      981 | 2025-01-19 | KUUSAMO.gg        | W   | 0.926      | 0.143        | 0.000 (0.000)    | 0.050 (0.007)    | 0 (0.000) |    13.65 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            4 |      989 | 2025-01-18 | FCottoNd          | L   | 0.920      | -            | -                | -                | -         |   -14.24 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            3 |      992 | 2025-01-18 | Puhevika          | W   | 0.919      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.50 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            2 |      998 | 2025-01-17 | Heimo Esports     | L   | 0.914      | -            | -                | -                | -         |    -5.12 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |
|            1 |     1004 | 2025-01-17 | TOOMUCHVIDEOGAMES | W   | 0.913      | 0.143        | 0.000 (0.000)    | 0.052 (0.007)    | 0 (0.000) |    13.75 | JUS6, lammu, Mikzuuu, Tumppis, zyntix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
