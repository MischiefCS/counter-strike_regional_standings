### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [99](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  402.6<br />
<br />
Final Rank Value (402.6) = Starting Rank Value (401.2) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.2


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
|            7 |       41 | 2025-02-25 | Fire Flux Esports                         | L   | 0.317      | -            | -                | -                | -         |    -2.88 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            6 |       56 | 2025-02-24 | Aurora Gaming                             | L   | 0.312      | -            | -                | -                | -         |    -3.55 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            5 |      130 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 0.291      | -            | -                | -                | -         |    -0.95 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            4 |      141 | 2025-02-21 | GhoulsW                                   | W   | 0.291      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | birdfromsky, Keoz, REDSTAR, smooya, Vegi |
|            3 |      635 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.138      | 0.143        | 0.000 (0.000)    | 0.640 (0.013)    | 0 (0.000) |     2.88 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            2 |      644 | 2025-01-28 | Zero Tenacity                             | W   | 0.132      | 0.143        | 0.000 (0.000)    | 0.367 (0.007)    | 0 (0.000) |     2.76 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |
|            1 |      648 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.125      | -            | -                | -                | -         |    -1.35 | Keoz, REDSTAR, reiko, sinnopsyy, smooya  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
