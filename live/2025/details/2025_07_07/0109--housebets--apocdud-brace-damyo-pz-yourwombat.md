### Roster Details<br />
Team Name: Housebets<br />
Roster: apocdud, BRACE, damyo, pz, yourwombat<br />
Global Rank: [109](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  398.5<br />
<br />
Final Rank Value (398.5) = Starting Rank Value (400.8) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.8
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      219 | 2025-02-15 | KZG             | W   | 0.254      | 0.143        | 0.000 (0.000)    | 0.348 (0.013)    | 0 (0.000) |     4.03 | apocdud, BRACE, damyo, pz, yourwombat |
|            4 |      254 | 2025-02-14 | Vantage Esports | L   | 0.248      | -            | -                | -                | -         |    -3.81 | apocdud, BRACE, damyo, pz, yourwombat |
|            3 |      258 | 2025-02-14 | BBBCBMBS        | W   | 0.247      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.94 | apocdud, BRACE, damyo, pz, yourwombat |
|            2 |      418 | 2025-02-08 | DogEvil         | L   | 0.208      | -            | -                | -                | -         |    -3.24 | apocdud, BRACE, damyo, pz, yourwombat |
|            1 |      479 | 2025-02-07 | JiJieHao        | L   | 0.201      | -            | -                | -                | -         |    -3.16 | apocdud, BRACE, damyo, pz, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
