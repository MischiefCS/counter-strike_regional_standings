### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slax<br />
Global Rank: [141](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  581.7<br />
<br />
Final Rank Value (581.7) = Starting Rank Value (546.6) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.6
- 400 + ( ( 0.067 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 546.6


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
|            9 |      181 | 2025-02-17 | Leo Team             | L   | 0.685      | -            | -                | -                | -         |    -6.71 | abiraju, anttzz, frontales, Muk0s, slax |
|            8 |      185 | 2025-02-17 | GenOne               | W   | 0.685      | 0.143        | 0.007 (0.001)    | 0.268 (0.026)    | 0 (0.000) |    15.00 | abiraju, anttzz, frontales, Muk0s, slax |
|            7 |      191 | 2025-02-17 | Phantom Esports      | W   | 0.684      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.96 | abiraju, anttzz, frontales, Muk0s, slax |
|            6 |      241 | 2025-02-15 | BAKS Esports         | L   | 0.671      | -            | -                | -                | -         |   -15.26 | abiraju, anttzz, frontales, Muk0s, slax |
|            5 |      338 | 2025-02-11 | BetBoom Team         | L   | 0.644      | -            | -                | -                | -         |    -2.43 | abiraju, anttzz, frontales, Muk0s, slax |
|            4 |      358 | 2025-02-10 | Nexus Gaming         | W   | 0.639      | 0.143        | 0.086 (0.008)    | 0.235 (0.021)    | 0 (0.000) |    16.42 | abiraju, anttzz, frontales, Muk0s, slax |
|            3 |      371 | 2025-02-10 | GamerLegion          | L   | 0.637      | -            | -                | -                | -         |    -0.12 | abiraju, anttzz, frontales, Muk0s, slax |
|            2 |      445 | 2025-02-08 | Ex-Daystar           | W   | 0.625      | 0.143        | 0.000 (0.000)    | 0.069 (0.006)    | 0 (0.000) |     5.78 | abiraju, anttzz, frontales, Muk0s, slax |
|            1 |      456 | 2025-02-08 | Natus Vincere Junior | W   | 0.625      | 0.143        | 0.057 (0.005)    | 0.572 (0.051)    | 0 (0.000) |    16.46 | abiraju, anttzz, frontales, Muk0s, slax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
