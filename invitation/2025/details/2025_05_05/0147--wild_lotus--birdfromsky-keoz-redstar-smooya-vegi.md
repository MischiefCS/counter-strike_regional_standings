### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [147](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  562.2<br />
<br />
Final Rank Value (562.2) = Starting Rank Value (543.4) + Head To Head Adjustments (18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.4
- 400 + ( ( 0.066 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 543.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       41 | 2025-02-25 | Fire Flux Esports                         | L   | 0.737      | -            | -                | -                | -         |    -4.68 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           12 |       56 | 2025-02-24 | Aurora Gaming                             | L   | 0.732      | -            | -                | -                | -         |    -7.84 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           11 |      130 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 0.711      | -            | -                | -                | -         |    -4.31 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           10 |      141 | 2025-02-21 | GhoulsW                                   | W   | 0.711      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.05 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|            9 |      635 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.558      | 0.143        | 0.007 (0.001)    | 0.643 (0.051)    | 0 (0.000) |    13.24 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|            8 |      644 | 2025-01-28 | Zero Tenacity                             | W   | 0.552      | 0.143        | 0.011 (0.001)    | 0.380 (0.030)    | 0 (0.000) |    12.40 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|            7 |      648 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.545      | -            | -                | -                | -         |    -8.12 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|            6 |      897 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.245      | -            | -                | -                | -         |    -2.16 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|            5 |      960 | 2024-12-08 | 9INE                                      | W   | 0.212      | 0.435        | 0.041 (0.004)    | 0.853 (0.078)    | 0 (0.000) |     5.56 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|            4 |     1014 | 2024-12-06 | Endpoint                                  | W   | 0.198      | 0.435        | 0.005 (0.000)    | 0.083 (0.007)    | 0 (0.000) |     4.34 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|            3 |     1097 | 2024-12-03 | Metizport                                 | W   | 0.176      | 0.435        | 0.033 (0.002)    | 0.307 (0.023)    | 0 (0.000) |     4.49 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|            2 |     1606 | 2024-11-09 | ENCE                                      | L   | 0.017      | -            | -                | -                | -         |    -0.11 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     1626 | 2024-11-08 | Dynamo Eclot                              | L   | 0.009      | -            | -                | -                | -         |    -0.04 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
