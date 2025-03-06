### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slax<br />
Global Rank: [174](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  599.4<br />
<br />
Final Rank Value (599.4) = Starting Rank Value (553.1) + Head To Head Adjustments (46.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.1
- 400 + ( ( 0.074 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 553.1


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
|            9 |      181 | 2025-02-17 | Leo Team             | L   | 0.872      | -            | -                | -                | -         |    -8.30 | abiraju, anttzz, frontales, Muk0s, slax |
|            8 |      185 | 2025-02-17 | GenOne               | W   | 0.871      | 0.143        | 0.007 (0.001)    | 0.362 (0.045)    | 0 (0.000) |    18.92 | abiraju, anttzz, frontales, Muk0s, slax |
|            7 |      191 | 2025-02-17 | Phantom Esports      | W   | 0.871      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.10 | abiraju, anttzz, frontales, Muk0s, slax |
|            6 |      241 | 2025-02-15 | BAKS Esports         | L   | 0.858      | -            | -                | -                | -         |   -19.87 | abiraju, anttzz, frontales, Muk0s, slax |
|            5 |      338 | 2025-02-11 | BetBoom Team         | L   | 0.830      | -            | -                | -                | -         |    -2.99 | abiraju, anttzz, frontales, Muk0s, slax |
|            4 |      358 | 2025-02-10 | Nexus Gaming         | W   | 0.826      | 0.143        | 0.140 (0.017)    | 0.362 (0.043)    | 0 (0.000) |    22.87 | abiraju, anttzz, frontales, Muk0s, slax |
|            3 |      371 | 2025-02-10 | GamerLegion          | L   | 0.824      | -            | -                | -                | -         |    -0.14 | abiraju, anttzz, frontales, Muk0s, slax |
|            2 |      445 | 2025-02-08 | Ex-Daystar           | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.066 (0.008)    | 0 (0.000) |     7.18 | abiraju, anttzz, frontales, Muk0s, slax |
|            1 |      456 | 2025-02-08 | Natus Vincere Junior | W   | 0.812      | 0.143        | 0.068 (0.008)    | 0.744 (0.086)    | 0 (0.000) |    21.55 | abiraju, anttzz, frontales, Muk0s, slax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
