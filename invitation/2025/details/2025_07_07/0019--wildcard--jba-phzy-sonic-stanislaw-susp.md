### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Global Rank: [19](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [14]( ../../standings_europe_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [4]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  1112.9<br />
<br />
Final Rank Value (1112.9) = Starting Rank Value (1113.1) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.544[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.282[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1113.1
- 400 + ( ( 0.289 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1113.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      200 | 2025-02-17 | BIG             | L   | 0.263      | -            | -                | -                | -         |    -1.80 | JBa, phzy, Sonic, stanislaw, susp |
|           10 |      215 | 2025-02-16 | Virtus.pro      | L   | 0.256      | -            | -                | -                | -         |    -0.49 | JBa, phzy, Sonic, stanislaw, susp |
|            9 |      249 | 2025-02-15 | The MongolZ     | L   | 0.250      | -            | -                | -                | -         |    -0.17 | JBa, phzy, Sonic, stanislaw, susp |
|            8 |      272 | 2025-02-14 | MIBR            | W   | 0.244      | 1.000        | 0.136 (0.033)    | 0.316 (0.077)    | 1 (0.244) |     4.10 | JBa, phzy, Sonic, stanislaw, susp |
|            7 |      621 | 2025-01-31 | Team Liquid     | L   | 0.152      | -            | -                | -                | -         |    -2.22 | JBa, phzy, Sonic, stanislaw, susp |
|            6 |      624 | 2025-01-31 | FURIA           | L   | 0.150      | -            | -                | -                | -         |    -3.27 | JBa, phzy, Sonic, stanislaw, susp |
|            5 |      637 | 2025-01-29 | BIG             | W   | 0.137      | 1.000        | 0.252 (0.035)    | 0.421 (0.058)    | 1 (0.137) |     3.48 | JBa, phzy, Sonic, stanislaw, susp |
|            4 |      687 | 2025-01-15 | Astralis        | L   | 0.043      | -            | -                | -                | -         |    -0.01 | JBa, phzy, Sonic, stanislaw, susp |
|            3 |      693 | 2025-01-12 | 9Pandas         | W   | 0.024      | 0.417        | 0.036 (0.000)    | 0.239 (0.002)    | 0 (0.000) |     0.11 | JBa, phzy, Sonic, stanislaw, susp |
|            2 |      696 | 2025-01-11 | SINNERS Esports | W   | 0.018      | 0.417        | 0.002 (0.000)    | 0.235 (0.002)    | 0 (0.000) |     0.05 | JBa, phzy, Sonic, stanislaw, susp |
|            1 |      700 | 2025-01-10 | Insilio         | W   | 0.012      | 0.417        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.01 | JBa, phzy, Sonic, stanislaw, susp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,145.66)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $18,750.00     | $5,717.88       |
| 2025-02-09 |      0.211 | $4,500.00      | $950.00         |
| 2025-01-12 |      0.024 | $20,000.00     | $477.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
