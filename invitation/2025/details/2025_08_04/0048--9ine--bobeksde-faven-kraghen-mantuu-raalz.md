### Roster Details<br />
Team Name: 9INE<br />
Roster: bobeksde, faveN, kraghen, mantuu, raalz<br />
Global Rank: [48](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  510.9<br />
<br />
Final Rank Value (510.9) = Starting Rank Value (507.7) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.161[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.7
- 400 + ( ( 0.041 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 507.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       65 | 2025-02-24 | BC.Game Esports                           | L   | 0.123      | -            | -                | -                | -         |    -0.34 | bobeksde, faveN, kraghen, mantuu, raalz |
|            8 |      126 | 2025-02-21 | Partizan Esports                          | L   | 0.105      | -            | -                | -                | -         |    -0.42 | BERRY, bobeksde, faveN, kraghen, mantuu |
|            7 |      154 | 2025-02-20 | Alliance                                  | W   | 0.099      | 0.143        | 0.000 (0.000)    | 0.773 (0.011)    | 0 (0.000) |     1.10 | bobeksde, faveN, kraghen, mantuu, raalz |
|            6 |      168 | 2025-02-19 | Iberian Soul                              | W   | 0.091      | 0.143        | 0.000 (0.000)    | 0.822 (0.011)    | 0 (0.000) |     1.03 | bobeksde, faveN, kraghen, mantuu, raalz |
|            5 |      296 | 2025-02-13 | GTZ.ESPORTS                               | W   | 0.050      | 0.435        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.85 | bobeksde, faveN, kraghen, mantuu, raalz |
|            4 |      335 | 2025-02-11 | Copenhagen Wolves (American organization) | W   | 0.037      | 0.435        | 0.000 (0.000)    | 0.435 (0.007)    | 0 (0.000) |     0.58 | bobeksde, faveN, kraghen, mantuu, raalz |
|            3 |      463 | 2025-02-08 | Astralis                                  | L   | 0.017      | -            | -                | -                | -         |     0.00 | bobeksde, faveN, kraghen, mantuu, raalz |
|            2 |      500 | 2025-02-07 | ENCE                                      | W   | 0.010      | 0.143        | 0.033 (0.000)    | 0.155 (0.000)    | 0 (0.000) |     0.27 | bobeksde, faveN, kraghen, mantuu, raalz |
|            1 |      528 | 2025-02-06 | Dynamo Eclot                              | W   | 0.003      | 0.143        | 0.037 (0.000)    | 0.215 (0.000)    | 0 (0.000) |     0.06 | bobeksde, faveN, kraghen, mantuu, raalz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
