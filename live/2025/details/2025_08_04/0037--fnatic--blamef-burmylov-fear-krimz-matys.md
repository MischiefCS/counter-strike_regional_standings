### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [37](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  549.7<br />
<br />
Final Rank Value (549.7) = Starting Rank Value (549.0) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 549.0
- 400 + ( ( 0.057 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 549.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      158 | 2025-02-20 | Dynamo Eclot          | L   | 0.098      | -            | -                | -                | -         |    -1.04 | blameF, Burmylov, fear, KRIMZ, matys |
|            6 |      202 | 2025-02-17 | RUSH B (Russian team) | W   | 0.076      | 0.435        | 0.000 (0.000)    | 0.755 (0.025)    | 0 (0.000) |     1.13 | blameF, Burmylov, fear, KRIMZ, matys |
|            5 |      229 | 2025-02-15 | Monte                 | L   | 0.065      | -            | -                | -                | -         |    -1.05 | blameF, Burmylov, fear, KRIMZ, matys |
|            4 |      294 | 2025-02-13 | 500                   | W   | 0.051      | 0.435        | 0.147 (0.003)    | 0.484 (0.011)    | 0 (0.000) |     1.44 | blameF, Burmylov, fear, KRIMZ, matys |
|            3 |      316 | 2025-02-12 | Partizan Esports      | L   | 0.043      | -            | -                | -                | -         |    -0.20 | blameF, Burmylov, fear, KRIMZ, matys |
|            2 |      377 | 2025-02-10 | ECSTATIC              | W   | 0.029      | 0.435        | 0.000 (0.000)    | 0.837 (0.011)    | 0 (0.000) |     0.43 | blameF, Burmylov, fear, KRIMZ, matys |
|            1 |      514 | 2025-02-06 | Team Spirit Academy   | W   | 0.005      | 0.435        | 0.000 (0.000)    | 0.025 (0.000)    | 0 (0.000) |     0.05 | blameF, Burmylov, fear, KRIMZ, matys |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
