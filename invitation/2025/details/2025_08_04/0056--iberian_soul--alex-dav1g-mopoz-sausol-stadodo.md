### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [56](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [40]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  417.3<br />
<br />
Final Rank Value (417.3) = Starting Rank Value (405.9) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 405.9
- 400 + ( ( 0.002 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 405.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        1 | 2025-03-01 | Alliance                                  | W   | 0.158      | 0.143        | 0.000 (0.000)    | 0.773 (0.017)    | 0 (0.000) |     2.42 | alex, dav1g, mopoz, sausol, stadodo |
|            9 |        8 | 2025-02-28 | Fire Flux Esports                         | W   | 0.150      | 0.143        | 0.000 (0.000)    | 0.763 (0.016)    | 0 (0.000) |     3.07 | alex, dav1g, mopoz, sausol, stadodo |
|            8 |       37 | 2025-02-25 | Aurora Gaming                             | L   | 0.132      | -            | -                | -                | -         |    -2.13 | alex, dav1g, mopoz, sausol, stadodo |
|            7 |       55 | 2025-02-24 | OG                                        | W   | 0.125      | 0.143        | 0.000 (0.000)    | 1.000 (0.018)    | 0 (0.000) |     2.72 | alex, dav1g, mopoz, sausol, stadodo |
|            6 |       57 | 2025-02-24 | Fire Flux Esports                         | W   | 0.124      | 0.143        | 0.000 (0.000)    | 0.763 (0.014)    | 0 (0.000) |     2.57 | alex, dav1g, mopoz, sausol, stadodo |
|            5 |       99 | 2025-02-23 | Alliance                                  | W   | 0.117      | 0.143        | 0.000 (0.000)    | 0.773 (0.013)    | 0 (0.000) |     1.82 | alex, dav1g, mopoz, sausol, stadodo |
|            4 |      159 | 2025-02-20 | ECSTATIC                                  | W   | 0.097      | 0.143        | 0.000 (0.000)    | 0.837 (0.012)    | 0 (0.000) |     2.03 | alex, dav1g, mopoz, sausol, stadodo |
|            3 |      168 | 2025-02-19 | 9INE                                      | L   | 0.091      | -            | -                | -                | -         |    -1.03 | alex, dav1g, mopoz, sausol, stadodo |
|            2 |      407 | 2025-02-09 | Copenhagen Wolves (American organization) | L   | 0.023      | -            | -                | -                | -         |    -0.27 | alex, dav1g, mopoz, sausol, stadodo |
|            1 |      476 | 2025-02-08 | UNiTY esports                             | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.24 | alex, dav1g, mopoz, sausol, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
