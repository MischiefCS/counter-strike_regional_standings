### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [80](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [55]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  655.1<br />
<br />
Final Rank Value (655.1) = Starting Rank Value (614.7) + Head To Head Adjustments (40.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.7
- 400 + ( ( 0.093 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 614.7


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
|           10 |      158 | 2025-02-20 | Dynamo Eclot           | L   | 0.517      | -            | -                | -                | -         |    -5.39 | blameF, Burmylov, fear, KRIMZ, matys |
|            9 |      202 | 2025-02-17 | RUSH B (Russian team)  | W   | 0.496      | 0.435        | 0.009 (0.002)    | 0.714 (0.154)    | 0 (0.000) |    10.01 | blameF, Burmylov, fear, KRIMZ, matys |
|            8 |      229 | 2025-02-15 | Monte                  | L   | 0.485      | -            | -                | -                | -         |    -5.72 | blameF, Burmylov, fear, KRIMZ, matys |
|            7 |      294 | 2025-02-13 | 500                    | W   | 0.471      | 0.435        | 0.123 (0.025)    | 1.000 (0.205)    | 0 (0.000) |    12.82 | blameF, Burmylov, fear, KRIMZ, matys |
|            6 |      316 | 2025-02-12 | Partizan Esports       | L   | 0.463      | -            | -                | -                | -         |    -3.76 | blameF, Burmylov, fear, KRIMZ, matys |
|            5 |      377 | 2025-02-10 | ECSTATIC               | W   | 0.449      | 0.435        | 0.008 (0.002)    | 0.830 (0.162)    | 0 (0.000) |     8.72 | blameF, Burmylov, fear, KRIMZ, matys |
|            4 |      514 | 2025-02-06 | Team Spirit Academy    | W   | 0.425      | 0.435        | 0.018 (0.003)    | 0.291 (0.054)    | 0 (0.000) |     9.19 | blameF, Burmylov, fear, KRIMZ, matys |
|            3 |      580 | 2025-02-04 | Betclic Apogee Esports | W   | 0.410      | 0.435        | 0.004 (0.001)    | 0.514 (0.092)    | 0 (0.000) |     9.06 | blameF, Burmylov, fear, KRIMZ, matys |
|            2 |      619 | 2025-02-01 | OG                     | W   | 0.389      | 0.435        | 0.000 (0.000)    | 1.000 (0.169)    | 0 (0.000) |     5.48 | blameF, Burmylov, fear, KRIMZ, matys |
|            1 |      688 | 2025-01-14 | Team Spirit            | L   | 0.272      | -            | -                | -                | -         |    -0.00 | blameF, Burmylov, fear, KRIMZ, matys |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
