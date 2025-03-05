### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Drox, Jynx, Mingovi, supar, swerzieN<br />
Global Rank: [251](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [36]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  538.4<br />
<br />
Final Rank Value (538.4) = Starting Rank Value (513.1) + Head To Head Adjustments (25.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.1
- 400 + ( ( 0.059 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 513.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       34 | 2025-02-25 | Only One Word    | L   | 1.000      | -            | -                | -                | -         |   -13.12 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |       49 | 2025-02-24 | TALON            | L   | 1.000      | -            | -                | -                | -         |   -17.32 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |       76 | 2025-02-23 | Rooster          | W   | 1.000      | 0.495        | 0.003 (0.002)    | 0.219 (0.108)    | 0 (0.000) |    20.05 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |      254 | 2025-02-14 | Housebets        | W   | 1.000      | 0.405        | 0.001 (0.001)    | 0.144 (0.058)    | 0 (0.000) |    18.07 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |      257 | 2025-02-14 | MANTRA           | W   | 1.000      | 0.405        | 0.000 (0.000)    | 0.129 (0.052)    | 0 (0.000) |    18.87 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     2167 | 2024-10-05 | Only One Word    | L   | 0.221      | -            | -                | -                | -         |    -2.43 | alecc, Drox, Jynx, Mingovi, supar    |
|            2 |     2192 | 2024-10-04 | MANTRA           | W   | 0.216      | 0.143        | 0.000 (0.000)    | 0.129 (0.004)    | 0 (0.000) |     4.35 | alecc, Drox, Jynx, Mingovi, supar    |
|            1 |     2194 | 2024-10-04 | SemperFi Esports | L   | 0.216      | -            | -                | -                | -         |    -3.19 | alecc, Drox, Jynx, Mingovi, supar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
