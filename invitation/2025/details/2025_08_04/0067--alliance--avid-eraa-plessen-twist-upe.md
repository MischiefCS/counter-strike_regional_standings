### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, eraa, PlesseN, twist, upE<br />
Global Rank: [67](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  404.1<br />
<br />
Final Rank Value (404.1) = Starting Rank Value (402.1) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.1
- 400 + ( ( 0.001 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 402.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        1 | 2025-03-01 | Iberian Soul         | L   | 0.158      | -            | -                | -                | -         |    -2.42 | avid, eraa, PlesseN, twist, upE |
|           13 |       13 | 2025-02-27 | PARIVISION           | W   | 0.144      | 0.143        | 0.000 (0.000)    | 1.000 (0.021)    | 0 (0.000) |     3.24 | avid, eraa, PlesseN, twist, upE |
|           12 |       28 | 2025-02-26 | Rhyno Esports        | W   | 0.136      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.11 | avid, eraa, PlesseN, twist, upE |
|           11 |       84 | 2025-02-23 | Roler Coaster        | L   | 0.118      | -            | -                | -                | -         |    -1.85 | avid, eraa, PlesseN, twist, upE |
|           10 |       93 | 2025-02-23 | Eternal Fire Academy | W   | 0.117      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.84 | avid, eraa, PlesseN, twist, upE |
|            9 |       99 | 2025-02-23 | Iberian Soul         | L   | 0.117      | -            | -                | -                | -         |    -1.82 | avid, eraa, PlesseN, twist, upE |
|            8 |      154 | 2025-02-20 | 9INE                 | L   | 0.099      | -            | -                | -                | -         |    -1.10 | avid, eraa, PlesseN, twist, upE |
|            7 |      167 | 2025-02-19 | ECSTATIC             | W   | 0.092      | 0.143        | 0.000 (0.000)    | 0.837 (0.011)    | 0 (0.000) |     1.94 | avid, eraa, PlesseN, twist, upE |
|            6 |      310 | 2025-02-12 | ENCE                 | L   | 0.044      | -            | -                | -                | -         |    -0.15 | avid, eraa, PlesseN, twist, upE |
|            5 |      405 | 2025-02-09 | GTZ.ESPORTS          | W   | 0.024      | 0.435        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.52 | avid, eraa, PlesseN, twist, upE |
|            4 |      466 | 2025-02-08 | Team Spirit Academy  | L   | 0.017      | -            | -                | -                | -         |    -0.26 | avid, eraa, PlesseN, twist, upE |
|            3 |      506 | 2025-02-07 | CYBERSHOKE Esports   | L   | 0.009      | -            | -                | -                | -         |    -0.03 | avid, eraa, PlesseN, twist, upE |
|            2 |      516 | 2025-02-06 | B8                   | L   | 0.005      | -            | -                | -                | -         |    -0.01 | avid, eraa, PlesseN, twist, upE |
|            1 |      532 | 2025-02-06 | OG                   | L   | 0.003      | -            | -                | -                | -         |    -0.02 | avid, eraa, PlesseN, twist, upE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
