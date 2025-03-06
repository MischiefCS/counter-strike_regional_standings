### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [52](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  591.5<br />
<br />
Final Rank Value (591.5) = Starting Rank Value (580.4) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 580.4
- 400 + ( ( 0.073 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 580.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      158 | 2025-02-20 | Dynamo Eclot           | L   | 0.284      | -            | -                | -                | -         |    -2.68 | blameF, Burmylov, fear, KRIMZ, matys |
|            9 |      202 | 2025-02-17 | RUSH B (Russian team)  | W   | 0.263      | 0.435        | 0.000 (0.000)    | 0.784 (0.090)    | 0 (0.000) |     3.54 | blameF, Burmylov, fear, KRIMZ, matys |
|            8 |      229 | 2025-02-15 | Monte                  | L   | 0.252      | -            | -                | -                | -         |    -4.31 | blameF, Burmylov, fear, KRIMZ, matys |
|            7 |      294 | 2025-02-13 | 500                    | W   | 0.237      | 0.435        | 0.113 (0.012)    | 1.000 (0.103)    | 0 (0.000) |     6.58 | blameF, Burmylov, fear, KRIMZ, matys |
|            6 |      316 | 2025-02-12 | Partizan Esports       | L   | 0.229      | -            | -                | -                | -         |    -1.50 | blameF, Burmylov, fear, KRIMZ, matys |
|            5 |      377 | 2025-02-10 | ECSTATIC               | W   | 0.216      | 0.435        | 0.000 (0.000)    | 0.735 (0.069)    | 0 (0.000) |     2.82 | blameF, Burmylov, fear, KRIMZ, matys |
|            4 |      514 | 2025-02-06 | Team Spirit Academy    | W   | 0.192      | 0.435        | 0.000 (0.000)    | 0.214 (0.018)    | 0 (0.000) |     1.67 | blameF, Burmylov, fear, KRIMZ, matys |
|            3 |      580 | 2025-02-04 | Betclic Apogee Esports | W   | 0.177      | 0.435        | 0.000 (0.000)    | 0.460 (0.035)    | 0 (0.000) |     2.67 | blameF, Burmylov, fear, KRIMZ, matys |
|            2 |      619 | 2025-02-01 | OG                     | W   | 0.156      | 0.435        | 0.000 (0.000)    | 1.000 (0.068)    | 0 (0.000) |     2.31 | blameF, Burmylov, fear, KRIMZ, matys |
|            1 |      688 | 2025-01-14 | Team Spirit            | L   | 0.039      | -            | -                | -                | -         |    -0.00 | blameF, Burmylov, fear, KRIMZ, matys |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
