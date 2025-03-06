### Roster Details<br />
Team Name: KONO.ECF<br />
Roster: amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN<br />
Global Rank: [83](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [56]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  413.4<br />
<br />
Final Rank Value (413.4) = Starting Rank Value (403.1) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.1
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 403.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      226 | 2025-02-15 | Rebels Gaming                             | L   | 0.252      | -            | -                | -                | -         |    -4.00 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|           10 |      232 | 2025-02-15 | BAKS Esports                              | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.099 (0.004)    | 0 (0.000) |     3.87 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            9 |      240 | 2025-02-15 | RUSH B (Russian team)                     | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.784 (0.028)    | 0 (0.000) |     5.38 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            8 |      398 | 2025-02-09 | CYBERSHOKE Esports                        | L   | 0.212      | -            | -                | -                | -         |    -0.71 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            7 |      541 | 2025-02-05 | Zero Tenacity                             | W   | 0.185      | 0.143        | 0.000 (0.000)    | 0.367 (0.010)    | 0 (0.000) |     3.83 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            6 |      577 | 2025-02-04 | Adventurers                               | W   | 0.178      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.77 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            5 |      647 | 2025-01-28 | ECSTATIC                                  | L   | 0.129      | -            | -                | -                | -         |    -1.35 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            4 |      655 | 2025-01-25 | Copenhagen Wolves (American organization) | L   | 0.112      | -            | -                | -                | -         |    -1.20 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            3 |      664 | 2025-01-24 | Iberian Soul                              | W   | 0.104      | 0.143        | 0.000 (0.000)    | 0.654 (0.010)    | 0 (0.000) |     1.68 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            2 |      705 | 2025-01-10 | SINNERS Esports                           | L   | 0.009      | -            | -                | -                | -         |    -0.05 | amster, byr9, cptkurtka023, s4ltovsk1yy, Sijeyy  |
|            1 |      710 | 2025-01-09 | BadGuys                                   | W   | 0.004      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | amster, byr9, cptkurtka023, s4ltovsk1yy, Sijeyy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
