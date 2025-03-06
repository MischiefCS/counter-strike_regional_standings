### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, suma, Zanto<br />
Global Rank: [109](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  512.4<br />
<br />
Final Rank Value (512.4) = Starting Rank Value (519.0) + Head To Head Adjustments (-6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.0
- 400 + ( ( 0.051 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 519.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      129 | 2025-02-21 | Minsk House           | L   | 0.525      | -            | -                | -                | -         |   -10.70 | ANSG1, kiR, kroK, suma, Zanto   |
|            9 |      137 | 2025-02-21 | RUSH B (Russian team) | W   | 0.524      | 0.143        | 0.009 (0.001)    | 0.714 (0.053)    | 0 (0.000) |    12.86 | ANSG1, kiR, kroK, suma, Zanto   |
|            8 |      239 | 2025-02-15 | ALGO                  | L   | 0.484      | -            | -                | -                | -         |   -10.00 | ANSG1, kiR, kroK, suma, Zanto   |
|            7 |      772 | 2024-12-22 | ESC Gaming            | L   | 0.117      | -            | -                | -                | -         |    -1.90 | ANSG1, kiR, Rytter, suma, Zanto |
|            6 |      775 | 2024-12-22 | WOPA Esport           | L   | 0.116      | -            | -                | -                | -         |    -0.92 | ANSG1, kiR, Rytter, suma, Zanto |
|            5 |      784 | 2024-12-21 | Dark Cloud Esports    | W   | 0.110      | 0.333        | 0.001 (0.000)    | 0.158 (0.006)    | 0 (0.000) |     2.35 | ANSG1, kiR, kroK, suma, Zanto   |
|            4 |      795 | 2024-12-20 | Preasy Esport         | W   | 0.103      | 0.333        | 0.005 (0.000)    | 0.236 (0.008)    | 0 (0.000) |     2.30 | ANSG1, kiR, kroK, suma, Zanto   |
|            3 |      802 | 2024-12-19 | KONO.ECF              | L   | 0.098      | -            | -                | -                | -         |    -0.78 | ANSG1, kiR, kroK, suma, Zanto   |
|            2 |      805 | 2024-12-19 | Viperio               | W   | 0.097      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.03 | ANSG1, kiR, kroK, suma, Zanto   |
|            1 |      819 | 2024-12-18 | Heimo Esports         | L   | 0.089      | -            | -                | -                | -         |    -0.81 | ANSG1, kiR, kroK, suma, Zanto   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
