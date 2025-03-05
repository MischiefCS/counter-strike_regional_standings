### Roster Details<br />
Team Name: Team Czech Republic<br />
Roster: Darber, NEOFRAG, olik, pandi7o, PerdY<br />
Global Rank: [203](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  626.4<br />
<br />
Final Rank Value (626.4) = Starting Rank Value (604.7) + Head To Head Adjustments (21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.7
- 400 + ( ( 0.108 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 604.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1452 | 2024-11-15 | The Huns Esports | W   | 0.492      | 0.617        | 0.025 (0.008)    | 0.516 (0.157)    | 1 (0.492) |    14.09 | Darber, NEOFRAG, olik, pandi7o, PerdY |
|            4 |     1460 | 2024-11-15 | Dusty Roots      | L   | 0.491      | -            | -                | -                | -         |    -4.78 | Darber, NEOFRAG, olik, pandi7o, PerdY |
|            3 |     1469 | 2024-11-14 | Partizan Esports | L   | 0.488      | -            | -                | -                | -         |    -0.75 | Darber, NEOFRAG, olik, pandi7o, PerdY |
|            2 |     1507 | 2024-11-13 | SINNERS Academy  | W   | 0.480      | 0.617        | 0.001 (0.000)    | 0.059 (0.017)    | 1 (0.480) |     9.59 | Darber, NEOFRAG, olik, pandi7o, PerdY |
|            1 |     1511 | 2024-11-13 | Kitsune Esports  | W   | 0.480      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.480) |     3.62 | Darber, NEOFRAG, olik, pandi7o, PerdY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
