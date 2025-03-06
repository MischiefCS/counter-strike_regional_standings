### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [108](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [71]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  514.1<br />
<br />
Final Rank Value (514.1) = Starting Rank Value (511.4) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.4
- 400 + ( ( 0.048 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 511.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       41 | 2025-02-25 | Fire Flux Esports                         | L   | 0.550      | -            | -                | -                | -         |    -3.80 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            9 |       56 | 2025-02-24 | Aurora Gaming                             | L   | 0.545      | -            | -                | -                | -         |    -8.19 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            8 |      130 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 0.525      | -            | -                | -                | -         |    -2.77 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            7 |      141 | 2025-02-21 | GhoulsW                                   | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.45 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            6 |      635 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.371      | 0.143        | 0.002 (0.000)    | 0.657 (0.035)    | 0 (0.000) |     8.73 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            5 |      644 | 2025-01-28 | Zero Tenacity                             | W   | 0.365      | 0.143        | 0.002 (0.000)    | 0.391 (0.020)    | 0 (0.000) |     8.23 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            4 |      648 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.359      | -            | -                | -                | -         |    -5.32 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            3 |      897 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.058      | -            | -                | -                | -         |    -0.49 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya  |
|            2 |      960 | 2024-12-08 | 9INE                                      | W   | 0.025      | 0.435        | 0.020 (0.000)    | 0.787 (0.009)    | 0 (0.000) |     0.65 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            1 |     1014 | 2024-12-06 | Endpoint                                  | W   | 0.011      | 0.435        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.17 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
