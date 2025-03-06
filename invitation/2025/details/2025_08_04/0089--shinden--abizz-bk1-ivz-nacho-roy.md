### Roster Details<br />
Team Name: ShindeN<br />
Roster: abizz, BK1, ivz, nacho, roy<br />
Global Rank: [89](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  399.3<br />
<br />
Final Rank Value (399.3) = Starting Rank Value (400.2) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      179 | 2025-02-17 | Yawara E-Sports  | L   | 0.079      | -            | -                | -                | -         |    -1.25 | abizz, BK1, ivz, nacho, roy |
|            4 |      203 | 2025-02-16 | UNO MILLE        | L   | 0.073      | -            | -                | -                | -         |    -1.16 | abizz, BK1, ivz, nacho, roy |
|            3 |      270 | 2025-02-14 | Game Hunters     | W   | 0.058      | 0.371        | 0.000 (0.000)    | 0.139 (0.003)    | 0 (0.000) |     0.91 | abizz, BK1, ivz, nacho, roy |
|            2 |      334 | 2025-02-11 | Atrix Esports    | W   | 0.038      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.59 | abizz, BK1, ivz, nacho, roy |
|            1 |      487 | 2025-02-07 | Imperial Esports | L   | 0.013      | -            | -                | -                | -         |    -0.02 | abizz, BK1, ivz, nacho, roy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
