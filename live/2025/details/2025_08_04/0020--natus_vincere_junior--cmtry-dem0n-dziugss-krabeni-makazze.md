### Roster Details<br />
Team Name: Natus Vincere Junior<br />
Roster: cmtry, dem0n, dziugss, Krabeni, makazze<br />
Global Rank: [20](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  840.9<br />
<br />
Final Rank Value (840.9) = Starting Rank Value (842.7) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.7
- 400 + ( ( 0.169 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 842.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       96 | 2025-02-23 | BC.Game Esports       | L   | 0.117      | -            | -                | -                | -         |    -1.42 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            9 |      109 | 2025-02-22 | GUN5 Esports          | W   | 0.112      | 0.435        | 0.024 (0.001)    | 0.157 (0.008)    | 0 (0.000) |     1.45 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            8 |      150 | 2025-02-21 | ENCE                  | W   | 0.102      | 0.435        | 0.033 (0.001)    | 0.155 (0.007)    | 0 (0.000) |     1.37 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            7 |      171 | 2025-02-18 | RUSH B (Russian team) | W   | 0.085      | 0.435        | 0.000 (0.000)    | 0.755 (0.028)    | 0 (0.000) |     0.40 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            6 |      209 | 2025-02-16 | Sashi Esport          | L   | 0.071      | -            | -                | -                | -         |    -1.88 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            5 |      246 | 2025-02-15 | ECSTATIC              | W   | 0.063      | 0.435        | 0.000 (0.000)    | 0.837 (0.023)    | 0 (0.000) |     0.30 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            4 |      290 | 2025-02-13 | Monte                 | L   | 0.052      | -            | -                | -                | -         |    -1.37 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            3 |      332 | 2025-02-11 | Chimera Esports       | W   | 0.038      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            2 |      456 | 2025-02-08 | Hesta                 | L   | 0.018      | -            | -                | -                | -         |    -0.50 | cmtry, dem0n, dziugss, Krabeni, makazze |
|            1 |      499 | 2025-02-07 | Fire Flux Esports     | L   | 0.011      | -            | -                | -                | -         |    -0.29 | cmtry, dem0n, dziugss, Krabeni, makazze |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($590.74)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $5,000.00      | $590.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
