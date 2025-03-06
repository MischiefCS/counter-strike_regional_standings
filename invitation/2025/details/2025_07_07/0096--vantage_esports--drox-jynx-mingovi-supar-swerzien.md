### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Drox, Jynx, Mingovi, supar, swerzieN<br />
Global Rank: [96](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  403.8<br />
<br />
Final Rank Value (403.8) = Starting Rank Value (401.6) + Head To Head Adjustments (2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       34 | 2025-02-25 | Only One Word | L   | 0.321      | -            | -                | -                | -         |    -5.16 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |       49 | 2025-02-24 | TALON         | L   | 0.315      | -            | -                | -                | -         |    -5.05 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |       76 | 2025-02-23 | Rooster       | W   | 0.307      | 0.143        | 0.000 (0.000)    | 0.251 (0.011)    | 0 (0.000) |     4.76 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |      254 | 2025-02-14 | Housebets     | W   | 0.248      | 0.143        | 0.000 (0.000)    | 0.197 (0.007)    | 0 (0.000) |     3.81 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |      257 | 2025-02-14 | MANTRA        | W   | 0.247      | 0.143        | 0.000 (0.000)    | 0.224 (0.008)    | 0 (0.000) |     3.87 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
